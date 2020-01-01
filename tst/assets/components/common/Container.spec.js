/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Container } from 'common'

describe('<Container />', () => {
  it('should render empty', () => {
    const container = shallow(<Container />)

    expect(container.instance()).toBeInstanceOf(Container)
    expect(container.is('div')).toBe(true)
    expect(container.hasClass('container')).toBe(true)
    expect(container.hasClass('content')).toBe(false)
  })

  it('should render w/ content prop', () => {
    const container = shallow(<Container content />)

    expect(container.hasClass('container')).toBe(true)
    expect(container.hasClass('content')).toBe(true)
  })

  it('should render w/ children', () => {
    const container = shallow(<Container><div>test</div></Container>)

    expect(container.contains(<div>test</div>)).toBe(true)
  })
})
