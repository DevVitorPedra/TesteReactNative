import React from 'react'
import { Pressable } from 'react-native'
import Texts from '../../components/text'
import Description from '../../components/description'
import ExpandedCard from '../../components/expanded-card'


export default function LocationCard({ name, type, dimension }) {

  return (
   
      <ExpandedCard testID="episode-card" >
        <Description testID="styled-description">Name</Description>
        <Texts>{name}</Texts>
        <Description testID="styled-description">Type</Description>
        <Texts testID="styled-description">{type}</Texts>
        <Description testID="styled-description">Dimension</Description>
        <Texts testID="styled-description">{dimension}</Texts>
      </ExpandedCard>
  
  )
}
