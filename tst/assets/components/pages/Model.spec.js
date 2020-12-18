/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Model } from 'pages'

jest.mock('react-ga')

describe('<Model />', () => {
  it('should render Model page static content', () => {
    const tree = renderer.create(<MemoryRouter><Model location={{ pathname: '/model' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Model page static content and report page view', () => {
    shallow(<Model location={{ pathname: '/model' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
