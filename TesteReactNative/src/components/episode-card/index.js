import React from 'react'
import { StyledEpisodeCard } from './style'

export default function EpisodeCard({children}) {
  return (
    <StyledEpisodeCard>{children}</StyledEpisodeCard>
  )
}
