/*
  global HTMLElement
*/

import React from 'react'
import { render } from '@testing-library/react'
import App from 'App'

jest.mock('environment', () => {
  return {
    name: 'Test'
  }
})

describe('App', () => {
  it('should render without message', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello from Test')).toBeInstanceOf(HTMLElement)
  })

  it('should render with message', () => {
    const message = 'React app template'
    const { getByText } = render(<App message={message} />)
    expect(getByText(`Hello from ${message}`)).toBeInstanceOf(HTMLElement)
  })
})
