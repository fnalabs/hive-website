import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Container extends Component {
  static propTypes = {
    content: PropTypes.bool
  }

  render () {
    const { children, content } = this.props

    return (
      <div className={`container${content ? ' content' : ''}`}>{children}</div>
    )
  }
}
