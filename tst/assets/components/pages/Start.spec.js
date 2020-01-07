/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Start } from 'pages'

jest.mock('react-ga')

describe('<Start />', () => {
  it('should render Start page static content', () => {
    const tree = renderer.create(<MemoryRouter><Start location={{ pathname: '/start' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Start page static content and report page view', () => {
    shallow(<Start location={{ pathname: '/start' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
