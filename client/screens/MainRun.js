import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import runCalc from '../helpers/runCalc';

import { useSelector } from 'react-redux';

import Monitor from '../components/Monitor';

import apiService from '../apiService/apiClientService';

const MainRun = ({ location }) => {
  const initialPosition = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.01,
  };

  const UserId = useSelector((state) => state.user.value);

  const [listener, setListener] = useState({});
  const [positions, setPositions] = useState([]);
  const [distance, setDistance] = useState(0);
  const [mapTrace, setMapTrace] = useState([]);
  const [avgPace, setAvgPace] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elevationGain, setElevationGain] = useState(0);
  const [elevationLoss, setElevationLoss] = useState(0);
  const [timeStarted, setTimeStarted] = useState(0);

  useEffect(() => {
    setMapTrace([]);
    setTimeStarted(location.timestamp);
  }, []);

  useEffect(() => {
    const lastPosition =
      positions.length > 2 ? positions[positions.length - 2] : location;
    const currentPosition = positions.length
      ? positions[positions.length - 1]
      : location;
    const startingPosition = positions.length ? positions[0] : location;

    setDistance(
      (prevDistance) =>
        prevDistance + runCalc.distanceBetween(lastPosition, currentPosition),
    );
    if (lastPosition !== currentPosition) {
      setAvgPace((prevAvgPace) =>
        runCalc.averagePace(distance, startingPosition, currentPosition),
      );
    }
    setDuration(
      (prevDuration) =>
        prevDuration + runCalc.timeBetween(lastPosition, currentPosition),
    );
    setElevationGain((prevElevationGain) =>
      runCalc.elGain(lastPosition, currentPosition),
    );
    setElevationLoss((prevElevationLoss) =>
      runCalc.elLoss(lastPosition, currentPosition),
    );
  }, [positions]);

  const startRunning = async () => {
    const options = {
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 1,
    };
    const locationUpdate = await Location.watchPositionAsync(
      options,
      onPositionChange,
    );
    setListener(locationUpdate);
    setIsRunning(true);
  };

  const onPositionChange = (position) => {
    setPositions((prevPositions) => [...prevPositions, position]);
    setMapTrace((prevMapTrace) => [...prevMapTrace, position.coords]);
  };

  const stopRunning = async () => {
    listener.remove();
    const run = {
      distance,
      avgPace,
      duration,
      elevationGain,
      elevationLoss,
      timeStarted,
      UserId,
    };

    const createdRun = await apiService.createRun(run);
    const strTrace = JSON.stringify(mapTrace);
    const trace = {
      mapTrace: strTrace,
      RunId: createdRun.id,
    };
    await apiService.createRunTrace(trace);

    await apiService.updateDistance(UserId, distance);
    setPositions([]);
    setIsRunning(false);
  };

  let marker = initialPosition;
  if (positions.length) {
    marker = positions[positions.length - 1].coords;
  }

  return (
    <View independent>
      <Monitor distance={distance} avgPace={avgPace} duration={duration} />
      <MapView style={styles.map} region={initialPosition}>
        <MapView.Marker coordinate={marker} />
        <MapView.Polyline
          coordinates={mapTrace}
          strokeColor="#00BFA6"
          strokeWidth={6}
        />
      </MapView>
      {isRunning ? (
        <TouchableOpacity style={styles.buttonStop} onPress={stopRunning}>
          <Text style={styles.buttonFont}>STOP</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonStart} onPress={startRunning}>
          <Text style={styles.buttonFont}>START</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: '70%',
  },
  buttonStart: {
    position: 'absolute',
    top: '87%',
    alignSelf: 'center',
    borderRadius: 40,
    padding: 14,
    paddingHorizontal: 32,
    backgroundColor: '#00BFA6',
  },
  buttonStop: {
    position: 'absolute',
    top: '87%',
    alignSelf: 'center',
    borderRadius: 40,
    padding: 14,
    paddingHorizontal: 36,
    backgroundColor: '#eb4034',
  },
  buttonFont: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainRun;
