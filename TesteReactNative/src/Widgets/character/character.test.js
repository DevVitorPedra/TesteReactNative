import React from 'react'

import { render } from '@testing-library/react-native'

import Character from './index'

it("renders Character correctly", ()=>{
    render(<Character/>)
})

it('renders the character card and pressable correctly',()=>{
    const { getAllByTestId} = render(<Character/>)
    expect(getAllByTestId('pressable').length).toBe(1)
    expect(getAllByTestId('episode-card').length).toBe(1)
    
})
test('should load data first', async () => { 
    const{ getAllByTestId } = render(<Character/>)
    await waitFor(()=>expect(getAllByTestId('avatar').length).toBe(1))
   await waitFor(()=>expect(getAllByTestId('text-name').length).toBe(1))
 })
