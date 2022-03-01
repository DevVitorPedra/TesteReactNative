import React from 'react'
import { StyledRickandMorty } from '../header/style'
import { StyledScreenDescription } from './style'

export default function ScreenDescription({title}) {
  return (
    <StyledScreenDescription>
        <StyledRickandMorty>
            {title}
        </StyledRickandMorty>
    </StyledScreenDescription>
  )
}
