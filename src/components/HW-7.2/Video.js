import React from 'react'
import ItemCover from './ItemCover'

function Video(props) {
  return (
    <div className="highlight__item highlight__item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="..."></iframe>
      <p className="highlight__views">Просмотров: {props.views}</p>
    </div>
  )
};

export default ItemCover(Video);
