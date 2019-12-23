/*
  global HTMLElement HTMLAnchorElement
*/

import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'
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

  it('should render Suspensecontact after /contact is clicked', async () => {
    const { getByText } = render(<App />)
    const contactButton = getByText('Contact')
    expect(contactButton).toBeInstanceOf(HTMLAnchorElement)
    fireEvent.click(contactButton)
    expect(getByText('Loading...')).toBeInstanceOf(HTMLElement)
    await wait()
    expect(getByText('Contact Component!')).toBeInstanceOf(HTMLElement)
  })
})
