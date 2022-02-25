import React from 'react'
import { StyledHeader, StyledInput, StyledLogo } from './style'

export default function Header() {
  return (
    <StyledHeader>
        <StyledInput placeholder="Search episode"/>
        <StyledLogo source={{uri:"https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-icon-png-1073.png"}}/>
    </StyledHeader>
  )
}
