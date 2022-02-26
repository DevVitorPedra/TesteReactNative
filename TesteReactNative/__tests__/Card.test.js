import React from 'react'

import { render,waitFor } from '@testing-library/react-native'

import Card from '../src/components/card/index'

it("renders Card", ()=>{
    render(<Card/>)
})

test('should load data first', async () => {
   const {getAllByTestId}= render(<Card/>)
try {
   
  await waitFor(()=>rexpect(getAllByTestId('pressable').length).toBe(1))

  await waitFor(()=>rexpect(getAllByTestId('episode-card').length).toBe(1))

  await waitFor(()=>rexpect(getAllByTestId("styled-description").length).toBe(6))
} catch (error) {
   
}
})
