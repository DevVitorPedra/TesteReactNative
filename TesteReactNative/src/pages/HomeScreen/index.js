import React from 'react'
import { StatusBar } from 'react-native'
import ScrollBackground from '../../components/background'
import Header from '../../Widgets/header'
import PagerView from 'react-native-pager-view'
export default function Home() {
  return (
    <>
      <StatusBar role="status" data-testid="status-bar" barStyle='light-content' backgroundColor={'black'} />
      <Header title="Rick and Morty Guide" />
      <PagerView 
        orientation='horizontal'
        transitionStyle='curl'
        showPageIndicator="true"
      style={{flex:1}} initialPage={1}>
        <View key="1"></View>
        <View key="2"></View>
        <View key="3"></View>
      </PagerView>
    </>
  )
}
