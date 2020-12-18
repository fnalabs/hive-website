/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { Documentation } from 'pages'

jest.mock('react-ga')

describe('<Documentation />', () => {
  it('should render Documentation page static content', () => {
    const tree = renderer.create(<MemoryRouter><Documentation location={{ pathname: '/documentation' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Documentation page static content and report page view', () => {
    shallow(<Documentation location={{ pathname: '/documentation' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
