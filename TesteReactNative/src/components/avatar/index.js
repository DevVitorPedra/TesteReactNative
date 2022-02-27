import React from 'react'
import { StyledCharAvatar } from './style'

export default function Avatar({url}) {
  return (
    <StyledCharAvatar source={{uri:url}}/>
  )
}
