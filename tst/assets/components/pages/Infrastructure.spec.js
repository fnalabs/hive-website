/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Infrastructure } from 'pages'

jest.mock('react-ga')

describe('<Infrastructure />', () => {
  it('should render Infrastructure page static content', () => {
    const tree = renderer.create(<MemoryRouter><Infrastructure location={{ pathname: '/domain' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Infrastructure page static content and report page view', () => {
    shallow(<Infrastructure location={{ pathname: '/domain' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
