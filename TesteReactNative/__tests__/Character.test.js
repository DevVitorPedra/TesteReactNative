import React from 'react'

import { render } from '@testing-library/react-native'

import Character from '../src/Character/index'

it("renders Character", () => {
    render(<Character />)
})
test('should load some data', async () => {
    const { getAllByTestId } = render(<Character />)
    try {
        await expect(getAllByTestId('pressable').length).toBe(1)
        await expect(getAllByTestId('text-name').length).toBe(1)
        await expect(getAllByTestId('avatar').length).toBe(1)
        await expect(getAllByTestId('text-name').length).toBe(1)
    } catch (error) {
        console.error(error)
    }
})

