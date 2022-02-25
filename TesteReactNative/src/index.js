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
const Stack = createNativeStackNavigator()
import HomeScreen from './Home';
import Details from './Details';
import CharacterDetails from './CharacterDetails';
import 'react-native-gesture-handler'
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={opt} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={opt2} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={opt3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const opt = {
  headerShown: false,
}
const opt2 = {
  headerShown: false
}
const opt3 = {
  headerShown: false
}

export default App;
