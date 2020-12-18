/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Telemetry } from 'pages'

jest.mock('react-ga')

describe('<Telemetry />', () => {
  it('should render Telemetry page static content', () => {
    const tree = renderer.create(<MemoryRouter><Telemetry location={{ pathname: '/telemetry' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Telemetry page static content and report page view', () => {
    shallow(<Telemetry location={{ pathname: '/telemetry' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
