import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import {
  Home,
  Overview,
  Model,
  Domain,
  Infrastructure,
  Start,
  Setup,
  Basic,
  Rest,
  CqrsEs,
  Documentation,
  Environments,
  Cookie,
  Privacy
} from 'pages'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/overview' component={Overview} />
    <Route exact path='/model' component={Model} />
    <Route exact path='/domain' component={Domain} />
    <Route exact path='/infrastructure' component={Infrastructure} />
    <Route exact path='/start' component={Start} />
    <Route exact path='/setup' component={Setup} />
    <Route exact path='/basic' component={Basic} />
    <Route exact path='/rest' component={Rest} />
    <Route exact path='/cqrs-es' component={CqrsEs} />
    <Route exact path='/documentation' component={Documentation} />
    <Route exact path='/environments' component={Environments} />
    <Route exact path='/cookie' component={Cookie} />
    <Route exact path='/privacy' component={Privacy} />
    <Redirect to='/' />
  </Switch>
)
