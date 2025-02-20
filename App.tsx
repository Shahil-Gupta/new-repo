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

const Stack = createNativeStackNavigator();  // ✅ Correct


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="File" component={File} 
        options={{title:"Choose a Subcategory"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
