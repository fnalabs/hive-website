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

  it('should render Model page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/model']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Domain page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/domain']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Infrastructure page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/infrastructure']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Telemetry page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/telemetry']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Get Started page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/start']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Setup page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/setup']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Basic page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/basic']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Rest page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/rest']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render CqrsEs page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/cqrs-es']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Documentation page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/documentation']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Environments page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/environments']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
