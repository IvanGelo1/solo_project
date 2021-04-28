import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UserRank from '../components/UserRank';
import apiService from '../apiService/apiClientService';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await apiService.getAllUsers();
      setUsers(allUsers);
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>yKnot.</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subTitle}>LeaderBoard</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(data) => (
          <UserRank rank={users.indexOf(data.item)} item={data.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 191, 166, 0.05)',
  },
  header: {
    backgroundColor: '#00BFA6',
    height: 40,
  },
  title: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subHeader: {
    backgroundColor: '#FFD037',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: '#00BFA6',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Leaderboard;
