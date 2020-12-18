/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { MemoryRouter } from 'react-router'
import ReactGA from 'react-ga'

import { CqrsEs } from 'pages'

jest.mock('react-ga')

describe('<CqrsEs />', () => {
  it('should render CqrsEs page static content', () => {
    const tree = renderer.create(<MemoryRouter><CqrsEs location={{ pathname: '/cqrs-es' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render CqrsEs page static content and report page view', () => {
    shallow(<CqrsEs location={{ pathname: '/cqrs-es' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
