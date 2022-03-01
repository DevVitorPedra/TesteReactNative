import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import ScrollBackground from '../../components/background'
import Header from '../../Widgets/header'
import PagerView from 'react-native-pager-view'
import Locations from '../Locations'
import Episodes from '../Episodes'
import Characters from '../Characters'
export default function Home({navigation}) {
  return (
    <>
      <StatusBar role="status" data-testid="status-bar" barStyle='light-content' backgroundColor={'black'} />
      <Header title="Rick and Morty Guide" />
      <PagerView 
        orientation='horizontal'
        transitionStyle='curl'
        showPageIndicator={true}
      style={{flex:1}} initialPage={1}>
        <View key="1"><Episodes navigation={navigation}/></View>
        <View key="2"><Characters  navigation={navigation}/></View>
        <View key="3"><Locations /></View>
      </PagerView>
    </>
  )
}
