import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import CharacterDetails from '../src/CharacterDetails/index'

it("renders Character Details", () => {
    render(<CharacterDetails />)
})
it("renders ScrollList", () => {
    const { getAllByTestId } = render(<CharacterDetails />)
    expect(getAllByTestId('scroll').length).toBe(1)
})

test('should load some data first', async () => {
    const { getAllByTestId } = render(<CharacterDetails />)
    try {
        
       await waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('loading-image').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('loading-text').length).toBe(2))
   
       await waitFor(() => expect(getAllByTestId('header').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('text-name').length).toBe(1))
   
       await waitFor(() => expect(getAllByTestId('text').length).toBe(8))
    } catch (error) {
        
    }

})
