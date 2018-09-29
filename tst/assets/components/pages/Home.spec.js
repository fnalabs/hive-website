/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { MemoryRouter } from 'react-router'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import Home from '../../../../src/assets/components/pages/home/Home.jsx'

jest.mock('react-ga')

describe('<Home />', () => {
  test('should render homepage static content', () => {
    Cookies.get = jest.fn().mockReturnValue(false)

    const tree = renderer.create(<MemoryRouter><Home location={{ pathname: '/' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  test('should render homepage static content and report page view', () => {
    Cookies.get = jest.fn().mockReturnValue(true)

    const tree = renderer.create(<MemoryRouter><Home location={{ pathname: '/' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
