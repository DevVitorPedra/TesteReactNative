import React from "react";

import { fireEvent, render, waitFor,describe } from "@testing-library/react-native";

import HomeSCreen from "../src/Home";

it('renders Homescreen successfuly',()=>{
    render(<HomeSCreen/>)
})
it('renders scrollview',()=>{
    const {getAllByTestId} = render(<HomeSCreen/>)
    expect(getAllByTestId('scrollview').length).toBe(1)
})

it('renders the loadings items',()=>{
    const { getAllByTestId} = render(<HomeSCreen/>)
    expect(getAllByTestId('loading-image').length).toBe(1)
    expect(getAllByTestId('loading-text').length).toBe(2)
})


// test('should load items first', async () => { 
//     const {getAllByTestId } = render(<HomeSCreen/>)
//    await waitFor(()=>expect(getAllByTestId('pagination-next').length).toBe(0))
//    await waitFor(()=> fireEvent.press(getByTestId('pagination-prev')))
//    await waitFor(()=>getByTestId("pagination-prev"))
//    await waitFor(()=>expect(getAllByTestId('pagination-prev').length).toBe(1))
// })
