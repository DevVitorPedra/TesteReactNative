import React from 'react'
import { View } from 'react-native'
import PagerView from 'react-native-pager-view'
import Header from '../../widgets/header'
import Characters from '../Characters'
import Episodes from '../Episodes'
import Locations from '../Locations'
export default function HomeScreen({navigation}) {
  return (
 <>
   <Header title="Rick and Morty Guide"/>
   <PagerView
    orientation='horizontal'
    transitionStyle='curl'
    showPageIndicator={true}
  style={{flex:1}} initialPage={1}>
         <View key="1" style={{flex:1}}><Episodes  navigation={navigation}/></View>
         <View key="2" style={{flex:1}}><Characters  navigation={navigation}/></View>
         <View key="3" style={{flex:1}}><Locations navigation={navigation}/></View>
   </PagerView>
 </>
  )
}
