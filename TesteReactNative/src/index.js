/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './pages/Episodes';
import Details from './pages/Details';
import CharacterDetails from './pages/CharacterDetails';
import 'react-native-gesture-handler'
import Home from './pages/HomeScreen';
import Characters from './pages/Characters';
import { SafeAreaView, ScrollView } from 'react-native';
const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homescreen'>
        <Stack.Screen name="Homescreen" component={Home} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name='Details'
          component={Details}
        />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>




  );
};


export default App;
