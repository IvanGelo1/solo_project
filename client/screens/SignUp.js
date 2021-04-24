import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.welcome}>Welcome on board!</Text>
        <Text style={styles.quote}>All for run and run for all!</Text>
      </View>
      <View style={styles.startContainer}>
      <View>
        <TextInput placeholder='Full Name' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
        <TextInput placeholder='Confirm Password' style={styles.input} />
      </View>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Navigation')}}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
          <View style={styles.signCont}>
            <Text style={styles.user}>Already have an account? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
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
    backgroundColor: '#F0F4F3',
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 70,
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
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  startContainer: {
    // alignContent: 'flex-end',
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
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
    textAlign: 'center'
  }
})

export default SignUp;