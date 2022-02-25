import React from 'react'

import { render } from '@testing-library/react-native'

import Card from '../src/components/card/index'

it("renders Card", ()=>{
    render(<Card/>)
})

test('should load data first', async () => {
   const {getAllByTestId}= render(<Card/>)

   expect(getAllByTestId('pressable').length).toBe(1)

   expect(getAllByTestId('episode-card').length).toBe(1)

   expect(getAllByTestId("styled-description").length).toBe(6)
})
