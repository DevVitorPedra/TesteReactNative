import React from 'react'
import { Pressable } from 'react-native'

import { StyledDesc, StyledText, StyledEpisodeCard } from './style'

export default function Card({ navigation, name, episode, date, id }) {

  return (
    <Pressable onPress={() => navigation.navigate('Details', { id: id })}>
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
