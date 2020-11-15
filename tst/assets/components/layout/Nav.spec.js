/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'
// import { mount } from 'enzyme'

import { Nav } from 'layout'

describe('<Nav />', () => {
  // it('should toggle mobile menu correctly', () => {
  //   const nav = mount(<MemoryRouter><Nav /></MemoryRouter>)

  //   expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(false)
  //   nav.find('.navbar-burger').simulate('click')
  //   expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(true)
  //   nav.find('.navbar-burger').simulate('click')
  //   expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(false)
  // })

  it('should render homepage nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Overview page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/overview']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Get Started page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/start']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
