import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import apiService from '../apiService/apiClientService';

import { useDispatch } from 'react-redux';
import { userChange } from '../features/activeUserSlice';

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
    navigation.navigate('Navigation');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Welcome back!</Text>
      <Image
        style={styles.img}
        source={require('../assets/undraw_Lighthouse_frb8.png')}
      />
      <View style={styles.startContainer}>
        <View>
          <TextInput
            email={email}
            onChangeText={email => setEmail(email)}
            placeholder='Email'
            style={styles.input}
          />
          <TextInput
            password={password}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            placeholder='Password'
            style={styles.input}
          />
          <Text style={styles.forgot}>Forgot password</Text>
        </View>
          <TouchableOpacity style={styles.button} onPress={() => onSign()}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
            <View style={styles.signCont}>
              <Text style={styles.user}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
                <Text style={styles.signIn}>Sign Up</Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F3',
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 60,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00BFA6",
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
    textAlign: 'center'
  },
  startContainer: {
    marginBottom: 30,
  },
  img: {
    alignSelf: 'center',
  },
  forgot: {
    textAlign: 'center',
    color: '#00BFA6',
    fontWeight: 'bold',
  }
})

export default SignIn;