import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hero extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullheight']),
    color: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    bold: PropTypes.bool
  }

  render () {
    const { bold, children, className, color, size } = this.props

    let classes = 'hero'
    if (size) classes += ` is-${size}`
    if (color) classes += ` is-${color}`
    if (bold) classes += ' is-bold'
    if (className) classes += ` ${className}`

    return (
      <section className={classes}>{children}</section>
    )
  }
}
