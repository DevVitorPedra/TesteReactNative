import React from 'react'
import { StyledBackground } from './style'

export default function ScrollBackground({children}) {
  return (
    <StyledBackground  contentContainerStyle={{ alignItems: 'center' }}>{children}</StyledBackground>
  )
}
