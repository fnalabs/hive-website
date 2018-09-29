/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Nav from '../../../../src/assets/components/layout/Nav.jsx'

describe('<Nav />', () => {
  test('should toggle mobile menu correctly', () => {
    const nav = mount(<MemoryRouter><Nav /></MemoryRouter>)

    expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(false)
    nav.find('.navbar-burger').simulate('click')
    expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(true)
    nav.find('.navbar-burger').simulate('click')
    expect(nav.find('.navbar-menu').hasClass('is-active')).toBe(false)
  })

  test('should render homepage nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Overview page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/overview']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Get Started page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/start']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
