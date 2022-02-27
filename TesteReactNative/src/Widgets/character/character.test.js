import React from 'react'
import { awaiting} from '../../pages/Home'
import { render, waitFor } from '@testing-library/react-native'

import Character from './index'

it("renders Character correctly", ()=>{
    render(<Character/>)
})

