import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeroFooter extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const { centered, children, className } = this.props

    let classes = 'hero-foot'
    if (centered) classes += ' has-text-centered'
    if (className) classes += ` ${className}`

    return (
      <div className={classes}>{children}</div>
    )
  }
}
