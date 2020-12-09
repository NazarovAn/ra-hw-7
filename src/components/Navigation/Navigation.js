import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [visibility, setVisibility] = useState(true);
  const activeStyle = { color: 'rgb(100, 100, 100)' };
  
  return (
    <div className="navigation">
      <i className="material-icons nav_icon" onClick={ () => setVisibility(visibility ? false : true) }>
        { visibility? 'navigate_before' : 'navigate_next' }
      </i>
      <div className={ `navigation__list ${ visibility ? '' : 'navigation_hidden' }` }>
        <NavLink to="/first" activeStyle={ activeStyle }>Форматирование даты публикации</NavLink>
        <NavLink to="/second" activeStyle={ activeStyle }>Популярное и новое</NavLink>
        <NavLink to="/third" activeStyle={ activeStyle }>Агрегация данных</NavLink>
      </div>
    </div>
  )
}
