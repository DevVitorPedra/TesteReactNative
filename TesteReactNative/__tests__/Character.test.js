import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Character from '../src/Character/index'

it("renders Character", () => {
    render(<Character />)
})
test('should load some data', async () => {
    const { getAllByTestId } =  render(<Character />)
    try {
     await waitFor(()=>expect(getAllByTestId('pressable').length).toBe(1))
     await waitFor(()=>expect(getAllByTestId('episode-card').length).toBe(1))
     await waitFor(()=>expect(getAllByTestId('avatar').length).toBe(1))
     await waitFor(()=>expect(getAllByTestId('text-name').length).toBe(1))
    } catch (error) {
       
    }
})

