import React from 'react'
import Video from './Video'
import Article from './Article'

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <Video {...item} key={ item.id } />
        );
      case 'article':
        return (
          <Article {...item} key={ item.id } />
        );
      default:
        return null;
    }
  });
};
