import React from 'react'
import { Pressable } from 'react-native'

import { StyledDesc, StyledText, StyledEpisodeCard } from './style'

export default function Card({ navigation, name, episode, date, id }) {

  return (
    <Pressable testID='pressable' onPress={() => navigation.navigate('Details', { id: id })}>
      <StyledEpisodeCard testID="episode-card" >
        <StyledDesc testID="styled-description">Name</StyledDesc>
        <StyledText testID="styled-description">{name}</StyledText>
        <StyledDesc testID="styled-description">Episode</StyledDesc>
        <StyledText testID="styled-description">{episode}</StyledText>
        <StyledDesc testID="styled-description">Release</StyledDesc>
        <StyledText testID="styled-description">{date}</StyledText>
      </StyledEpisodeCard>
    </Pressable>
  )
}
