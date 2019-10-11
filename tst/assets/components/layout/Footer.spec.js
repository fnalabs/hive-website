/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Footer } from 'layout'

describe('<Footer />', () => {
  test('should render static content correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/']}><Footer /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
