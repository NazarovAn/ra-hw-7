import React from 'react'

export default function New(props) {
  return (
    <div className="highlight__wrap-item highlight__wrap-item-new">
      <span className="highlight__label">New!</span>
      {props.children}
    </div>
  )
};
