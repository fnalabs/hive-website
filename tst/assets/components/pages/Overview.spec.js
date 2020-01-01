/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Overview } from 'pages'

jest.mock('react-ga')

describe('<Overview />', () => {
  it('should render Overview page static content', () => {
    const tree = renderer.create(<MemoryRouter><Overview location={{ pathname: '/overview' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Overview page static content and report page view', () => {
    shallow(<Overview location={{ pathname: '/overview' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
