import React from 'react'
import { StyledBackground } from './style'
import { useWindowDimensions } from 'react-native'

export default function ScrollBackground({children}) {
  const windowWidth = useWindowDimensions().width
  return (
    <StyledBackground  contentContainerStyle={{ width:windowWidth, alignItems: 'center' }}>{children}</StyledBackground>
  )
}
