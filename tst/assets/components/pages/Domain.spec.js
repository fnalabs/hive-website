/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Domain } from 'pages'

jest.mock('react-ga')

describe('<Domain />', () => {
  it('should render Domain page static content', () => {
    const tree = renderer.create(<MemoryRouter><Domain location={{ pathname: '/domain' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Domain page static content and report page view', () => {
    shallow(<Domain location={{ pathname: '/domain' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
