import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import apiService from '../apiService/apiClientService';

import LighthouseSvg from '../src/LighthouseSvg';

import { useDispatch } from 'react-redux';
import { userChange } from '../features/activeUserSlice';
import { userNameChange } from '../features/userNameSlice';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSign = async () => {
    const user = {
      email,
      password,
    };
    const currentUser = await apiService.login(user);
    dispatch(userChange(currentUser.id));
    dispatch(userNameChange(currentUser.name));
    navigation.navigate('Navigation');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
      <View style={styles.container}>
        <Text style={styles.head}>Welcome back!</Text>
        <View style={styles.svg}>
          <LighthouseSvg />
        </View>
        <View style={styles.startContainer}>
          <View>
            <TextInput
              email={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              password={password}
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
              placeholder="Password"
              style={styles.input}
            />
            <Text style={styles.forgot}>Forgot password</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => onSign()}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signCont}>
            <Text style={styles.user}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <Text style={styles.signIn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F0F4F3',
    backgroundColor: 'rgba(0, 191, 166, 0.07)',
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 60,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    margin: 10,
    textAlign: 'center',
  },
  startContainer: {
    marginBottom: 30,
  },
  svg: {
    alignSelf: 'center',
  },
  forgot: {
    textAlign: 'center',
    color: '#00BFA6',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignIn;
