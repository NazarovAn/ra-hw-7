import React from 'react'

export default function Popular(props) {
  return (
    <div className="highlight__wrap-item highlight__wrap-item-popular">
      <span className="highlight__label">Popular!</span>
      {props.children}
    </div>
  )
};
