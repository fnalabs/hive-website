import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

import { AnalyticsLink, Container } from 'common'
import { HiveIO } from 'icons'

class Nav extends Component {
  state = {
    closed: true,
    location: ''
  }

  handleClickBlur = event => {
    event.currentTarget.blur()
  }

  handleToggleMenu = () => {
    this.setState({ closed: !this.state.closed })
  }

  static getDerivedStateFromProps (props, state) {
    if (props.location.pathname !== state.location) {
      return {
        closed: true,
        location: props.location.pathname
      }
    } else return null
  }

  render () {
    let navClasses = 'navbar is-spaced is-transparent is-absolute'
    if (this.state.location === '/') navClasses += ' is-home'

    return (
      <nav className={navClasses} role='navigation' aria-label='main navigation'>
        <Container>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' aria-label='home page' onClick={this.handleClickBlur}>
              <HiveIO height='36' />
              &nbsp;<span>Hive<sup>io</sup></span>
            </Link>

            <div className={`navbar-burger${this.state.closed ? '' : ' is-active'}`} onClick={this.handleToggleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={`navbar-menu${this.state.closed ? '' : ' is-active'}`}>
            <div className='navbar-end'>
              <div className='navbar-item has-dropdown is-hoverable'>
                <NavLink to='/overview' activeClassName='is-active' className='navbar-link' onClick={this.handleClickBlur}>Overview</NavLink>
                <div className='navbar-dropdown is-boxed'>
                  <NavLink to='/model' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Data Model</NavLink>
                  <NavLink to='/domain' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Domain Logic</NavLink>
                  <NavLink to='/infrastructure' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Infrastructure</NavLink>
                  <NavLink to='/telemetry' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Telemetry</NavLink>
                </div>
              </div>

              <div className='navbar-item has-dropdown is-hoverable'>
                <NavLink to='/start' activeClassName='is-active' className='navbar-link' onClick={this.handleClickBlur}>Get Started</NavLink>
                <div className='navbar-dropdown is-boxed'>
                  <NavLink to='/setup' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Setup</NavLink>
                  <hr className='navbar-divider' />
                  <span className='navbar-item has-text-weight-bold'>Examples:</span>
                  <NavLink to='/basic' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Basic</NavLink>
                  <NavLink to='/rest' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Rest</NavLink>
                  <NavLink to='/cqrs-es' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>CQRS/ES</NavLink>
                </div>
              </div>

              <div className='navbar-item has-dropdown is-hoverable'>
                <NavLink to='/documentation' activeClassName='is-active' className='navbar-link' onClick={this.handleClickBlur}>Documentation</NavLink>
                <div className='navbar-dropdown is-boxed'>
                  <NavLink to='/environments' activeClassName='is-active' className='navbar-item' onClick={this.handleClickBlur}>Environments</NavLink>
                  <AnalyticsLink to='https://fnalabs.github.io/hive-io/' target='_blank' rel='noopener noreferrer' className='navbar-item' onClick={this.handleClickBlur}>API</AnalyticsLink>
                  <hr className='navbar-divider' />
                  <span className='navbar-item has-text-weight-bold'>v2.1.0</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    )
  }
}

export default withRouter(Nav)
