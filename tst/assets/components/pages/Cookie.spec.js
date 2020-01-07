/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Cookie } from 'pages'

jest.mock('react-ga')

it('<Cookie /> - should render Cookie Policy static content', () => {
  const tree = renderer.create(<MemoryRouter><Cookie location={{ pathname: '/cookie' }} /></MemoryRouter>).toJSON()

  expect(tree).toMatchSnapshot()
})
