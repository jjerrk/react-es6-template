import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom'
import environment from 'environment'
import 'styles/main.scss'

const Home = (props) => {
  return (
    <h2>Home Component!</h2>
  )
}

const LazyContact = lazy(() => import('./Contact'))

const SuspenseContact = () =>
  <Suspense fallback={<div>Loading...</div>}>
    <LazyContact />
  </Suspense>

const App = ({ message }) => {
  message = message || environment.name
  return (
    <>
      <h1>Hello from {message}</h1>
      <BrowserRouter>
        <div>
          <nav>
            <Link exact to='/' activeClassName='active'>Home</Link>
            <Link to='/contact' activeClassName='active'>Contact</Link>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={SuspenseContact} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

App.propTypes = {
  message: PropTypes.string
}

export default hot(module)(App)
