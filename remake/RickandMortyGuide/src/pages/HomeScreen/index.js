import React from 'react'
import { View } from 'react-native'
import ScrollBackground from '../../components/background'
import PagerView from 'react-native-pager-view'
import Header from '../../widgets/Header'
export default function HomeScreen({navigation}) {
  return (
 <ScrollBackground>
   <Header title="Rick and Morty Guide"/>
   <PagerView
    orientation='horizontal'
    transitionStyle='curl'
    showPageIndicator={true}
  style={{flex:1}} initialPage={1}>
       
   </PagerView>
 </ScrollBackground>
  )
}
