/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Setup } from 'pages'

jest.mock('react-ga')

describe('<Setup />', () => {
  it('should render Setup page static content', () => {
    const tree = renderer.create(<MemoryRouter><Setup location={{ pathname: '/domain' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Setup page static content and report page view', () => {
    shallow(<Setup location={{ pathname: '/domain' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
