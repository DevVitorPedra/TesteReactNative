import React from 'react'
import { StyledHeader, StyledLogo, StyledRickandMorty } from './style'
import { useWindowDimensions } from 'react-native'
export default function Header({title} ) {
  const windowWidth = useWindowDimensions().width
  return (
    <StyledHeader style={{width:windowWidth}}>
        <StyledRickandMorty testID="title">{title}</StyledRickandMorty>
        <StyledLogo testID="header-image" source={{uri:"https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-icon-png-1073.png"}}/>
    </StyledHeader>
  )
}
