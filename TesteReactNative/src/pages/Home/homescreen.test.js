import React from "react";

import { render, waitFor  } from "@testing-library/react-native";
import { renderer} from 'react-test-renderer'
import HomeSCreen from "./index";

it('renders Homescreen correctly',()=>{
    render(<HomeSCreen/>)
})

it('renders button',()=>{
    const { getAllByRole} = render(<HomeSCreen/>)
    expect(getAllByRole('text').length).toBeGreaterThan(1)
})