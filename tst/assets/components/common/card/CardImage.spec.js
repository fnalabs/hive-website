/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { CardImage } from 'common/card'

describe('<CardImage />', () => {
  it('should render w/o content', () => {
    const cardContent = shallow(<CardImage />)

    expect(cardContent.instance()).toBeNull()
    expect(cardContent.is('div')).toBe(true)
    expect(cardContent.hasClass('card-image')).toBe(true)
    expect(cardContent.contains(<figure className='image is-96x96 has-text-centered' />)).toBe(true)
  })

  it('should render w/ content', () => {
    const cardContent = shallow(<CardImage><div>test</div></CardImage>)

    expect(cardContent.contains(<figure className='image is-96x96 has-text-centered'><div>test</div></figure>)).toBe(true)
  })
})
