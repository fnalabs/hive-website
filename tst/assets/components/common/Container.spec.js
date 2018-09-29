/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Container from '../../../../src/assets/components/common/Container.jsx'

describe('<Container />', () => {
  test('should render empty', () => {
    const container = shallow(<Container />)

    expect(container.instance()).toBeInstanceOf(Container)
    expect(container.is('div')).toBe(true)
    expect(container.hasClass('container')).toBe(true)
    expect(container.hasClass('content')).toBe(false)
  })

  test('should render w/ content prop', () => {
    const container = shallow(<Container content />)

    expect(container.hasClass('container')).toBe(true)
    expect(container.hasClass('content')).toBe(true)
  })

  test('should render w/ children', () => {
    const container = shallow(<Container><div>test</div></Container>)

    expect(container.contains(<div>test</div>)).toBe(true)
  })
})