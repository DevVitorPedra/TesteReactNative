import React from 'react'
import { View,  SafeAreaView } from 'react-native'
import Header from '../../Widgets/header'
import PagerView from 'react-native-pager-view'
import Locations from '../Locations'
import Episodes from '../Episodes'
import Characters from '../Characters'
import { ScrollView } from 'react-native-gesture-handler'
export default function Home({navigation}) {
  return (
    <>
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <Header title="Rick and Morty Guide" />
      <PagerView 
        orientation='horizontal'
        transitionStyle='curl'
        showPageIndicator={true}
      style={{flex:1}} initialPage={1}>
        <View key="1" style={{flex:1}}><Episodes navigation={navigation}/></View>
        <View key="2" style={{flex:1}}><Characters  navigation={navigation}/></View>
        <View key="3" style={{flex:1}}><Locations /></View>
      </PagerView>
      </ScrollView>
    </>
  )
}
