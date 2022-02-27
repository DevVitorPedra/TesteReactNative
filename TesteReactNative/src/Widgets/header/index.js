import React from 'react'
import { StyledText } from '../../Widgets/card/style'
import { StyledHeader, StyledInput, StyledLogo, StyledTest } from './style'

export default function Header({title}) {

  return (
    <StyledHeader>
        <StyledTest>{title}</StyledTest>
        <StyledLogo testID="header-image" source={{uri:"https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-icon-png-1073.png"}}/>
    </StyledHeader>
  )
}
