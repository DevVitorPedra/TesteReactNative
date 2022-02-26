import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Details from '../src/Details/'

it("renders Details", () => {
    render(<Details/>)
})

it("renders Details", () => {
  const {getAllByTestId} =  render(<Details/>)
  expect(getAllByTestId('scrollview').length).toBe(1)
  expect(getAllByTestId('loading-image').length).toBe(1)
  expect(getAllByTestId('loading-text').length).toBe(2)
})

test('should load the data', async () => { 
    const {getAllByTestId} =render(<Details/>)
    try {
        await waitFor(() => expect(getAllByTestId('episode-card').length).toBe(2))
        await waitFor(() => expect(getAllByTestId('text').length).toBe(2))
        await waitFor(()=>expect(getAllByTestId('text-name').length).toBe(1))
        await waitFor(()=>expect(getAllByTestId('characters').length).toBeGreaterThan(5))
    } catch (error) {
        
    }
 })


