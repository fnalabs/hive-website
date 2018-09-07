import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeroFooter extends Component {
  static propTypes = {
    centered: PropTypes.bool
  }

  render () {
    const { centered, children } = this.props

    return (
      <div className={`hero-footer${centered ? ' has-text-centered' : ''}`}>
        {children}
      </div>
    )
  }
}
