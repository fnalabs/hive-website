/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Environments } from 'pages'

jest.mock('react-ga')

describe('<Environments />', () => {
  it('should render Environments page static content', () => {
    const tree = renderer.create(<MemoryRouter><Environments location={{ pathname: '/environments' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Environments page static content and report page view', () => {
    shallow(<Environments location={{ pathname: '/environments' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
