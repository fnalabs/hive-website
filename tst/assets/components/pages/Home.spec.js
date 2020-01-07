/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Home } from 'pages'

jest.mock('react-ga')

describe('<Home />', () => {
  it('should render homepage static content', () => {
    const tree = renderer.create(<MemoryRouter><Home location={{ pathname: '/' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render homepage static content and report page view', () => {
    shallow(<Home location={{ pathname: '/' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
