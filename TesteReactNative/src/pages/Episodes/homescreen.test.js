import React from "react";

import { render, waitFor, describe } from "@testing-library/react-native";

import HomeSCreen from "./index";

it('renders Homescreen correctly',()=>{
    render(<HomeSCreen/>)
})
