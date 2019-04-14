import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

import { AnalyticsLink, Container } from 'common'
import { HiveIO } from 'icons'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      closed: true,
      location: ''
    }
  }

  toggleMenu = () => {
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
            <Link to='/' className='navbar-item'>
              <HiveIO height='36' />
              <span>Hive<sup>io</sup></span>
            </Link>

            <div className={`navbar-burger${this.state.closed ? '' : ' is-active'}`} onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={`navbar-menu${this.state.closed ? '' : ' is-active'}`}>
            <div className='navbar-end'>
              <NavLink to='/overview' activeClassName='is-active' className='navbar-item'>Overview</NavLink>
              <NavLink to='/start' activeClassName='is-active' className='navbar-item'>Get Started</NavLink>
              <AnalyticsLink to='https://fnalabs.github.io/hive-js/' className='navbar-item'>API</AnalyticsLink>
            </div>
          </div>
        </Container>
      </nav>
    )
  }
}

export default withRouter(Nav)
