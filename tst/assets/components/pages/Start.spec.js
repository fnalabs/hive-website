/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { MemoryRouter } from 'react-router'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { Start } from 'pages'

jest.mock('react-ga')

describe('<Start />', () => {
  test('should render Start page static content', () => {
    Cookies.get = jest.fn().mockReturnValue(false)

    const tree = renderer.create(<MemoryRouter><Start location={{ pathname: '/start' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  test('should render Start page static content and report page view', () => {
    Cookies.get = jest.fn().mockReturnValue(true)

    const tree = renderer.create(<MemoryRouter><Start location={{ pathname: '/start' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
