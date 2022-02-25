import React from 'react'
import { Button, Pressable } from 'react-native'
import { Icon } from 'react-native-elements' 
import { StyledDesc, StyledText,StyledEpisodeCard,StyledButton } from './style'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function Card({navigation,name,episode,date, id}) {
  return (
        <Pressable onPress={()=>navigation.navigate('Details',{id:id})}>
    <StyledEpisodeCard  >
        <StyledDesc>Name</StyledDesc>
        <StyledText>{name}</StyledText>
        <StyledDesc>Episode</StyledDesc>
        <StyledText>{episode}</StyledText>
        <StyledDesc>Release</StyledDesc>
        <StyledText>{date}</StyledText>
    </StyledEpisodeCard>
        </Pressable>
  )
}
