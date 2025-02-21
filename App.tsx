import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/screen/Home';
import Project from './src/screen/ProjectFile';
import Service from './src/screen/UpdateService';
import Login from './src/screen/Login';
import File from './src/screen/File';
import User from './src/screen/Users';

const Stack = createNativeStackNavigator();  // ✅ Correct


const App = () => {
  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:"white"}}>
      <User/>
    </SafeAreaView>
  );
}

export default App;
