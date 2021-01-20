import React from 'react'
import { NavLink } from 'react-router-dom'

import { AnalyticsLink } from 'common'

const AsideMenu = () => (
  <aside className='menu'>
    <p className='menu-label has-text-weight-bold'>v2.1.3</p>
    <ul className='menu-list'>
      <li><NavLink to='/overview' activeClassName='is-active'>Overview</NavLink>
        <ul>
          <li><NavLink to='/model' activeClassName='is-active'>Data Model</NavLink></li>
          <li><NavLink to='/domain' activeClassName='is-active'>Domain Logic</NavLink></li>
          <li><NavLink to='/infrastructure' activeClassName='is-active'>Infrastructure</NavLink></li>
          <li><NavLink to='/telemetry' activeClassName='is-active'>Telemetry</NavLink></li>
        </ul>
      </li>

      <li><NavLink to='/start' activeClassName='is-active'>Get Started</NavLink>
        <ul>
          <li><NavLink to='/setup' activeClassName='is-active'>Setup</NavLink></li>
          <li className='menu-label has-text-weight-bold'>Examples:</li>
          <li><NavLink to='/basic' activeClassName='is-active'>Basic</NavLink></li>
          <li><NavLink to='/rest' activeClassName='is-active'>Rest</NavLink></li>
          <li><NavLink to='/cqrs-es' activeClassName='is-active'>CQRS/ES</NavLink></li>
        </ul>
      </li>

      <li><NavLink to='/documentation' activeClassName='is-active'>Documentation</NavLink>
        <ul>
          <li><NavLink to='/environments' activeClassName='is-active'>Environments</NavLink></li>
          <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/' target='_blank' rel='noopener noreferrer'>API</AnalyticsLink></li>
        </ul>
      </li>
    </ul>
  </aside>
)

export default AsideMenu
