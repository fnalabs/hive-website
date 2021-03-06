/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Card } from 'common/card'

describe('<Card />', () => {
  it('should render w/o additional classes and content', () => {
    const card = shallow(<Card />)

    expect(card.instance()).toBeInstanceOf(Card)
    expect(card.is('article')).toBe(true)
    expect(card.hasClass('card')).toBe(true)
  })

  it('should render w/ additional classes and content', () => {
    const card = shallow(<Card className='test'><div>test</div></Card>)

    expect(card.hasClass('card')).toBe(true)
    expect(card.hasClass('test')).toBe(true)
    expect(card.contains(<div>test</div>)).toBe(true)
  })
})
