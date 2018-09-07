import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardContent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    const { children, title } = this.props

    return (
      <div className='card-content content'>
        <h3 className='has-text-centered'>{title}</h3>
        {children}
      </div>
    )
  }
}
