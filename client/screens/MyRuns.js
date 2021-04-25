import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RunPreview from '../components/RunPreview';
import formatting from '../helpers/formatting';
import { useSelector } from 'react-redux';

import apiService from '../apiService/apiClientService';

const MyRuns = ({ navigation }) => {
  const [runs, setRuns] = useState([]);
  const [totalRuns, setTotalRuns] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const userId = useSelector((state) => state.user.value);

  useEffect(() => {
    const fetchRuns = async () => {
      const sorted = await apiService.getAllRuns(userId);
      if (sorted.length) {
        setRuns(prevRuns => sorted);
        setTotalRuns(prevTotalRuns => sorted.length);
        setTotalDistance(prevTotalDistance => sorted.map(item => item.distance).reduce((prev, next) => prev + next));
        setTotalDuration(prevTotalDuration => sorted.map(item => item.duration).reduce((prev, next) => prev + next));
      }
    }
    fetchRuns();
  }, []);

  const duration = formatting.timeFormat(totalDuration);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All runs</Text>
      <View style={styles.allData}>
        <Text style={styles.total}>{totalRuns} runs</Text>
        <Text style={styles.total}>{totalDistance.toFixed(2)} km</Text>
        <Text style={styles.total}>{duration}</Text>
      </View>
      {
        runs.length
        ?
        <FlatList
        data={runs}
        keyExtractor={item => item.uuid}
        renderItem={(data) => <RunPreview navigation={navigation} item={data.item} />}
        />
        :
        <View></View>
      }
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F3',
    flex: 1
  },
  header: {
    backgroundColor: '#00BFA6',
    color: 'white',
    fontSize: 20,
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  allData: {
    backgroundColor: 'rgba(77,138,240, 0.9)',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
  total: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 15,
    marginTop: 30,
    padding: 20,
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    color: 'rgba(77,138,240, 1)',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default MyRuns;