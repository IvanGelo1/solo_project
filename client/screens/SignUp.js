import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import apiService from '../apiService/apiClientService';
import { useDispatch } from 'react-redux';
import { userChange } from '../features/activeUserSlice';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const dispatch = useDispatch();

  const onRegister = async () => {
    const user = {
      name,
      email,
      password,
    };
    const createdUser = await apiService.createUser(user);
    dispatch(userChange(createdUser.id));
    navigation.navigate('Navigation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.welcome}>Welcome aboard!</Text>
        <Text style={styles.quote}>All for run and run for all!</Text>
      </View>
      <View style={styles.startContainer}>
        <View>
          <TextInput
            name={name}
            onChangeText={(name) => setName(name)}
            placeholder="Full Name"
            style={styles.input}
          />
          <TextInput
            email={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            password={password}
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            confirm={confirm}
            secureTextEntry
            onChangeText={(confirm) => setConfirm(confirm)}
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onRegister()}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        <View style={styles.signCont}>
          <Text style={styles.user}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 191, 166, 0.07)',
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 70,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00BFA6',
    borderRadius: 3,
    padding: 12,
    margin: 30,
    marginBottom: 10,
  },
  signCont: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signIn: {
    color: '#00BFA6',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  startContainer: {
    marginBottom: 30,
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  quote: {
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    margin: 10,
    textAlign: 'center',
  },
});

export default SignUp;
