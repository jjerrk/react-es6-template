/*
  global HTMLElement
*/

import React from 'react'
import { render } from '@testing-library/react'
import App from 'App'

describe('App Component Test Suite', () => {
  it('Should render properly to DOM', () => {
    const message = 'React app template'
    console.log(message)
    const { getByText } = render(<App message={message} />)
    expect(getByText(`Hello from ${message}`)).toBeInstanceOf(HTMLElement)
  })
})
