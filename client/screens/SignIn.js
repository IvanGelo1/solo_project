import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Welcome back!</Text>
      <Image
        style={styles.img}
        source={require('../assets/undraw_Lighthouse_frb8.png')}
      />
      <View style={styles.startContainer}>
        <View>
          <TextInput placeholder='Email' style={styles.input} />
          <TextInput placeholder='Password' style={styles.input} />
          <Text style={styles.forgot}>Forgot password</Text>
        </View>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Navigation')}}>
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
    // textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    margin: 10,
    textAlign: 'center'
  },
  startContainer: {
    // alignContent: 'flex-end',
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