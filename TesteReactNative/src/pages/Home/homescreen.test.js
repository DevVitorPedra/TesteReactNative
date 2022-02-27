import React from "react";

import { fireEvent, render, waitFor,describe } from "@testing-library/react-native";

import HomeSCreen from "../src/pages/Home";

it('renders Homescreen successfuly',()=>{
    render(<HomeSCreen/>)
})