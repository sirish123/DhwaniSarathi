// Login.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement authentication logic here
    console.log('Logging in with:', username, password);
    // Add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
        placeholderTextColor='grey'
        textAlign='center'
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
        placeholderTextColor='grey'
        textAlign='center'
      />
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    
        <Text style={styles.educatorText}>Dont have an Account? Sign Up here</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black'
  },
   
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: "left",
  },

  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 40, 
    textAlign: "center"
  },

  title2: {
    fontSize : 20, 
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: "left", 
    marginTop: 80
  }, 

  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 0,
    width: '90%',
    color: 'white',
    alignContent: 'center'
    
  },
  Button: {
    backgroundColor: '#D4AF37', // Greenish Yellow
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginBottom: 20, 
    borderRadius: 10, 
  },

  educatorText: {
    color: 'white',
    marginBottom: 10,
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Login;