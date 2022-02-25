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
    
    waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))

    waitFor(() => expect(getAllByTestId('loading-image').length).toBe(1))

    waitFor(() => expect(getAllByTestId('loading-text').length).toBe(2))

    waitFor(() => expect(getAllByTestId('header').length).toBe(1))

    waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))

    waitFor(() => expect(getAllByTestId('avatar').length).toBe(1))

    waitFor(() => expect(getAllByTestId('text-name').length).toBe(1))

    waitFor(() => expect(getAllByTestId('text').length).toBe(8))

})
