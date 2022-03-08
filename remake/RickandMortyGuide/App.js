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
import Details from './src/pages/Details';


const App = () => {
 
  return (
  
       <NavigationContainer>
         <Stack.Navigator initialRouteName='Details'>
           <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
         </Stack.Navigator>
       </NavigationContainer>
     
  );
};



export default App;
