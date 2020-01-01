/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Tile } from 'common'

describe('<Tile />', () => {
  it('should render basic', () => {
    const tile = shallow(<Tile />)

    expect(tile.instance()).toBeInstanceOf(Tile)
    expect(tile.is('div')).toBe(true)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ type class', () => {
    const tile = shallow(<Tile type='ancestor' />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-ancestor')).toBe(true)
    expect(tile.hasClass('is-parent')).toBe(false)
    expect(tile.hasClass('is-child')).toBe(false)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ size class', () => {
    const tile = shallow(<Tile size={8} />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-8')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ vertical class', () => {
    const tile = shallow(<Tile vertical />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(true)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ centered class', () => {
    const tile = shallow(<Tile centered />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(true)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ centered (mobile) class', () => {
    const tile = shallow(<Tile centeredMobile />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(true)
    expect(tile.hasClass('content')).toBe(false)
  })

  it('should render w/ content class', () => {
    const tile = shallow(<Tile content />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(false)
    expect(tile.hasClass('has-text-centered')).toBe(false)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(false)
    expect(tile.hasClass('content')).toBe(true)
  })

  it('should render w/ all classes', () => {
    const tile = shallow(<Tile type='parent' size={6} vertical centered centeredMobile content />)

    expect(tile.hasClass('tile')).toBe(true)
    expect(tile.hasClass('is-ancestor')).toBe(false)
    expect(tile.hasClass('is-parent')).toBe(true)
    expect(tile.hasClass('is-child')).toBe(false)
    expect(tile.hasClass('is-6')).toBe(true)
    expect(tile.hasClass('is-vertical')).toBe(true)
    expect(tile.hasClass('has-text-centered')).toBe(true)
    expect(tile.hasClass('has-text-centered-mobile')).toBe(true)
    expect(tile.hasClass('content')).toBe(true)
  })
})
