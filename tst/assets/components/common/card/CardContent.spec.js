/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { CardContent } from 'common/card'

describe('<CardContent />', () => {
  it('should render w/o content', () => {
    const cardContent = shallow(<CardContent title='test' />)

    expect(cardContent.instance()).toBeInstanceOf(CardContent)
    expect(cardContent.is('div')).toBe(true)
    expect(cardContent.hasClass('card-content')).toBe(true)
    expect(cardContent.contains(<h3 className='has-text-centered'>test</h3>)).toBe(true)
  })

  it('should render w/ content', () => {
    const cardContent = shallow(<CardContent title='test'><div>test</div></CardContent>)

    expect(cardContent.contains(<h3 className='has-text-centered'>test</h3>)).toBe(true)
    expect(cardContent.contains(<div>test</div>)).toBe(true)
  })
})
