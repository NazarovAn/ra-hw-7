import React from 'react'
import ItemCover from './ItemCover'

function Article(props) {
  return (
    <div className="highlight__item highlight__item-article">
      <h3><a href="/">{props.title}</a></h3>
      <p className="highlight__views">Прочтений: {props.views}</p>
    </div>
  )
};

export default ItemCover(Article);
