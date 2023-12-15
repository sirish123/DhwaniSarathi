import React, { useState } from 'react';
import { Box, IconButton, HStack, Icon, MaterialIcons, StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import {AppBar} from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native';
// import './locales/i18n';  
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';
import { Button, Provider as PaperProvider, DefaultTheme, Appbar } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EB455F',
    accent: '#f1c40f',
  },
};
import { router } from "expo-router";

const Home = () => {
  const {t,i18n} =useTranslation(); 

  

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'top', padding: 32 }}>
        <Image source={require('../assets/images/logo.png')} style={{ width: 300, height: 300, alignSelf: 'center' }} />
        <Text style={{ fontSize: 32, alignSelf: 'center', fontWeight: 'bold', marginBottom: 40, color: "#2B3467" }}>{t('Hertz hEARing Test')}</Text>
        <Button mode="contained" onPress={() => router.push('/Screens/FillDetails')} style={{ margin: 10 }}>
          {t('Start Full Test')}
        </Button>
        <Button mode="contained" onPress={() => { }} style={{ margin: 5 }}>
          {t('Test Single Frequency')}
        </Button>
        <Button mode="contained" onPress={() => { }} style={{ margin: 5 }}>
          {t('Calibration')}
        </Button>
        <Button mode="contained" onPress={() => { }} style={{ margin: 5 }}>
          {t('Test Results')}
        </Button>
        <Button mode="contained" onPress={() => { }} style={{ margin: 5 }}>
          {t('Instructions')}
        </Button>
      </View>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5B6BA',
    padding: 20,
    justifyContent: 'center',

    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderColor: '#0096FF',
    borderWidth: 3
  },
  Button: {
    backgroundColor: '#0096FF', // Greenish Yellow
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 15,
    width: "100%",
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5
  
  },
  //new style created for the 2nd button as it has the padding below it as shown in the figma 
  Button1: {
    backgroundColor: '#0096FF', // Greenish Yellow
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 15,
    width: "100%",
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },

  gif: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
});

export default Home;
