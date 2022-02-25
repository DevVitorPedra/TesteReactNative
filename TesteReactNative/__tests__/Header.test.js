import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Header from '../src/components/header'

it("renders Header", ()=>{
    render(<Header/>)
})
test('should load image first', async () => {
   const {getAllByTestId}= render(<Header/>)
   await  waitFor(()=> expect(getAllByTestId('header-image').length).toBe(1))
})
