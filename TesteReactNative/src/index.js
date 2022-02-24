/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import HomeScreen from './Home';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Stack.Navigator>
  
      <Stack.Screen name="Home" component={HomeScreen} options={{title:"Ricky and Morty", headerTitleAlign:'center'}}/>
 
    
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
