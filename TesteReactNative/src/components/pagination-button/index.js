import React from 'react'
import { StyledPaginationButton } from './styled'

export default function PaginationButton({ title, action}) {
  return (
    <StyledPaginationButton onPress={action} title={title}></StyledPaginationButton>
  )
}
