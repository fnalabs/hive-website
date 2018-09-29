/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { MemoryRouter } from 'react-router'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import Overview from '../../../../src/assets/components/pages/overview/Overview.jsx'

jest.mock('react-ga')

describe('<Overview />', () => {
  test('should render Overview page static content', () => {
    Cookies.get = jest.fn().mockReturnValue(false)

    const tree = renderer.create(<MemoryRouter><Overview location={{ pathname: '/overview' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  test('should render Overview page static content and report page view', () => {
    Cookies.get = jest.fn().mockReturnValue(true)

    const tree = renderer.create(<MemoryRouter><Overview location={{ pathname: '/overview' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
