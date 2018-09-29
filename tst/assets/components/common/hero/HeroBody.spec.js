/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import HeroBody from '../../../../../src/assets/components/common/hero/HeroBody.jsx'

describe('<HeroBody />', () => {
  test('should render basic', () => {
    const heroBody = shallow(<HeroBody />)

    expect(heroBody.instance()).toBeInstanceOf(HeroBody)
    expect(heroBody.is('div')).toBe(true)
    expect(heroBody.hasClass('hero-body')).toBe(true)
    expect(heroBody.hasClass('has-text-centered')).toBe(false)
  })

  test('should render w/ centered content', () => {
    const heroBody = shallow(<HeroBody centered><div>test</div></HeroBody>)

    expect(heroBody.hasClass('hero-body')).toBe(true)
    expect(heroBody.hasClass('has-text-centered')).toBe(true)
    expect(heroBody.contains(<div>test</div>)).toBe(true)
  })
})
