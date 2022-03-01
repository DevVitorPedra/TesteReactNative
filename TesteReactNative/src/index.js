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
const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homescreen'>
        <Stack.Screen name="Homescreen" component={Home} options={opt}/>
        <Stack.Screen name="Home" component={HomeScreen} options={opt} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={opt} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={opt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const opt = {
  headerShown: false,
}


export default App;
