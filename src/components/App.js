import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import environment from 'environment'

const App = ({ message }) => {
  message = message || environment.name
  return <h1>Hello from {message}</h1>
}

App.propTypes = {
  message: PropTypes.string
}

export default hot(module)(App)
