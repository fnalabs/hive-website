import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Home, Overview, Start } from './pages'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/overview' component={Overview} />
    <Route exact path='/start' component={Start} />
    <Redirect to='/' />
  </Switch>
)
