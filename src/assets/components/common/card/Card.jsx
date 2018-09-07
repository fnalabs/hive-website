import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { children, className } = this.props

    return (
      <article className={`card${className ? ` ${className}` : ''}`}>
        {children}
      </article>
    )
  }
}
