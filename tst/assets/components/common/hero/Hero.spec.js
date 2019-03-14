/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Hero } from 'common/hero'

describe('<Hero />', () => {
  test('should render basic', () => {
    const hero = shallow(<Hero />)

    expect(hero.instance()).toBeInstanceOf(Hero)
    expect(hero.is('section')).toBe(true)

    expect(hero.hasClass('hero')).toBe(true)
    expect(hero.hasClass('is-medium')).toBe(false)
    expect(hero.hasClass('is-light')).toBe(false)
    expect(hero.hasClass('is-bold')).toBe(false)
  })

  test('should render basic w/ content', () => {
    const hero = shallow(<Hero><div>test</div></Hero>)

    expect(hero.contains(<div>test</div>)).toBe(true)
  })

  test('should render w/ size', () => {
    const hero = shallow(<Hero size='medium' />)

    expect(hero.hasClass('hero')).toBe(true)
    expect(hero.hasClass('is-medium')).toBe(true)
    expect(hero.hasClass('is-light')).toBe(false)
    expect(hero.hasClass('is-bold')).toBe(false)
  })

  test('should render w/ size and color', () => {
    const hero = shallow(<Hero size='medium' color='light' />)

    expect(hero.hasClass('hero')).toBe(true)
    expect(hero.hasClass('is-medium')).toBe(true)
    expect(hero.hasClass('is-light')).toBe(true)
    expect(hero.hasClass('is-bold')).toBe(false)
  })

  test('should render w/ size, color, and bold', () => {
    const hero = shallow(<Hero size='medium' color='light' bold />)

    expect(hero.hasClass('hero')).toBe(true)
    expect(hero.hasClass('is-medium')).toBe(true)
    expect(hero.hasClass('is-light')).toBe(true)
    expect(hero.hasClass('is-bold')).toBe(true)
  })

  test('should render w/ custom class', () => {
    const hero = shallow(<Hero className='custom' />)

    expect(hero.hasClass('hero')).toBe(true)
    expect(hero.hasClass('is-medium')).toBe(false)
    expect(hero.hasClass('is-light')).toBe(false)
    expect(hero.hasClass('is-bold')).toBe(false)
    expect(hero.hasClass('custom')).toBe(true)
  })
})
