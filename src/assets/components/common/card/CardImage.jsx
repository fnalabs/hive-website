import React from 'react'

export const CardImage = props => (
  <div className='card-image'>
    <figure className='image is-96x96 has-text-centered'>
      {props.children}
    </figure>
  </div>
)
