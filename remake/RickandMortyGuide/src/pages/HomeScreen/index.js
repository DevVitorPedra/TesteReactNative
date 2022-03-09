import React from 'react'
import { View } from 'react-native'
import ScrollBackground from '../../components/background'
import PagerView from 'react-native-pager-view'
import Header from '../../widgets/Header'
import Characters from '../Characters'
import Texts from '../../components/text'
export default function HomeScreen({navigation}) {
  return (
 <>
   <Header title="Rick and Morty Guide"/>
   <PagerView
    orientation='horizontal'
    transitionStyle='curl'
    showPageIndicator={true}
  style={{flex:1}} initialPage={1}>
         <View key="1" style={{flex:1}}><Characters  navigation={navigation}/></View>
   </PagerView>
 </>
  )
}
