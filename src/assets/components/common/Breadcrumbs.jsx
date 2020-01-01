import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Breadcrumbs extends Component {
  static propTypes = {
    breadcrumbs: PropTypes.func.isRequired
  }

  render () {
    return (
      <nav className='breadcrumb has-bullet-separator is-hidden-touch' aria-label='breadcrumbs'>
        <ul>{this.props.breadcrumbs()}</ul>
      </nav>
    )
  }
}
