import React from 'react'
import { Pressable } from 'react-native'
import Texts from '../../components/text'
import Description from '../../components/description'
import ExpandedCard from '../../components/expanded-card'


export default function Card({ navigation, name, episode, date, id }) {

  return (

    <Pressable testID='pressable' onPress={() => navigation.navigate('Details', { id: id })}>
      <ExpandedCard testID="episode-card" >
        <Description testID="styled-description">Name</Description>
        <Texts>{name}</Texts>
        <Description testID="styled-description">Episode</Description>
        <Texts testID="styled-description">{episode}</Texts>
        <Description testID="styled-description">Release</Description>
        <Texts testID="styled-description">{date}</Texts>
      </ExpandedCard>
    </Pressable>
  
  )
}