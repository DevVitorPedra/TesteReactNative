
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/pages/HomeScreen';
import Details from './src/pages/Details';
import Characters from './src/pages/Characters'
import CharacterDetails from './src/pages/CharacterDetails'
import Episodes from './src/pages/Episodes';

const Stack = createNativeStackNavigator()

const App = () => {
 
  return (
  
       <NavigationContainer>
         <Stack.Navigator initialRouteName='Homescreen'>
           <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
           <Stack.Screen name='Characters' component={Characters} options={{headerShown:false}}/>
           <Stack.Screen name='CharacterDetails' component={CharacterDetails} options={{headerShown:false}}/>
           <Stack.Screen name='Episodes' component={Episodes} options={{headerShown:false}}/>
         </Stack.Navigator>
       </NavigationContainer>
     
  );
};



export default App;
