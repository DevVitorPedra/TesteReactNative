import React, { useEffect } from 'react'
import { Animated, View } from 'react-native'
import { StyledRickandMorty } from '../header/style'
import { StyledScreenDescription,StyledArrow } from './style'



export default function ScreenDescription({ title }) {
  const fadeAnim = new Animated.Value(0)
  const fadeAnim2 = new Animated.Value(0)
  const fadeAnim3 = new Animated.Value(0)
 

  useEffect(() => {
    Animated.stagger(
        200,
      [
      Animated.loop(
        Animated.timing(fadeAnim,{
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        })
      ),
    
      Animated.loop(
        Animated.timing(fadeAnim2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
      ),
      Animated.loop(
        Animated.timing(fadeAnim3, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
      )

    ]
    ).start();
  }, [fadeAnim,fadeAnim2,fadeAnim3])
  return (
    <StyledScreenDescription>
      {(title!=="Episodes")?
        <View style={{width:100,flexDirection:'row',justifyContent:"flex-start",paddingLeft:10}}>  
        <Animated.View style={{  opacity: fadeAnim }}>
              <StyledArrow>&gt;</StyledArrow>
          </Animated.View>
          <Animated.View style={{  opacity: fadeAnim2 }}>
            <StyledArrow>&gt;</StyledArrow>
          </Animated.View>
          <Animated.View style={{  opacity: fadeAnim3 }}>
            <StyledArrow>&gt;</StyledArrow>
          </Animated.View>
          </View>:<View style={{width:100,paddingLeft:30}}></View>}
      <StyledRickandMorty  >

        {title}

      </StyledRickandMorty>
      {(title!=="Locations")?
        <View style={{width:100,flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}>  
        <Animated.View style={{  opacity: fadeAnim3 }}>
              <StyledArrow>&lt;</StyledArrow>
          </Animated.View>
          <Animated.View style={{  opacity: fadeAnim2 }}>
            <StyledArrow>&lt;</StyledArrow>
          </Animated.View>
          <Animated.View style={{  opacity: fadeAnim }}>
            <StyledArrow>&lt;</StyledArrow>
          </Animated.View>
          </View>:<View style={{width:100,paddingRight:30}}></View>}
    </StyledScreenDescription>
  )
}
