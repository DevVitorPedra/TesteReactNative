/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import HomeScreen from './src/pages/HomeScreen';
import {
  SafeAreaView,
  ScrollView,
 Text,
  View,

} from 'react-native';


const App = () => {
 
  return (
  
       <NavigationContainer>
         <Stack.Navigator initialRouteName='HomeScreen'>
           <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
       </NavigationContainer>
     
  );
};



export default App;
