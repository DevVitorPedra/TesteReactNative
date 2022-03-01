import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Header from './index'

it("renders Header correctly", ()=>{
    render(<Header/>)
})

test('renders header title', () => { 
    const{ getAllByTestId } = render(<Header/>)
     expect(getAllByTestId('title')).toBeTruthy()
   
    
 })
 test('renders header image', () => { 
    const{ getAllByTestId } = render(<Header/>)
     expect(getAllByTestId('header-image')).toBeTruthy()
    
 })

