import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Header from './index'

it("renders Header correctly", ()=>{
    render(<Header/>)
})

test('should load data first', async () => { 
    const{ getAllByTestId } = render(<Header/>)
    await waitFor(()=>expect(getAllByTestId('title').length).toBe(1))
   await waitFor(()=>expect(getAllByTestId('header-image').length).toBe(1))
 })

