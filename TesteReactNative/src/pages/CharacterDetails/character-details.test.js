import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import CharacterDetails from './index'

it("renders Character Details correctly", () => {
    render(<CharacterDetails />)
})

