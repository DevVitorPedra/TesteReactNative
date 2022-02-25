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
import Details from './Details';
import 'react-native-gesture-handler'
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen  name="Home" component={HomeScreen} options={opt}/>
      <Stack.Screen
                name='Details'
                component={ Details }
                options={opt2} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const opt = {
  title:'Rick And Morty Guide',
    
  headerTitleAlign:'center',
  headerTitleStyle: {fontWeight:'bold'},
  headerStyle:{
    backgroundColor:'#08A8CC',
  }
   
  
}
const opt2 = {
  title:'Details',
    
   headerTitleAlign:'center',
   headerTitleStyle: {fontWeight:'bold'},
   headerStyle:{
     backgroundColor:'#08A8CC',
   }
}

export default App;
