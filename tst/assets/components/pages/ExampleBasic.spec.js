/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Basic } from 'pages'

jest.mock('react-ga')

describe('<Basic />', () => {
  it('should render Basic page static content', () => {
    const tree = renderer.create(<MemoryRouter><Basic location={{ pathname: '/basic' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Basic page static content and report page view', () => {
    shallow(<Basic location={{ pathname: '/basic' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
