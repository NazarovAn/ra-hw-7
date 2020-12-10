import React from 'react'
import Popular from './Popular'
import New from './New'

export default function ItemCover(Component) {
  class ItemCover extends React.Component{
    wrapItem() {
      console.log(this.props);
      if (this.props.views > 1000) {
        return <Popular><Component {...this.props} /></Popular>
      } if (this.props.views < 100) {
        return <New><Component {...this.props} /></New>
      }
      return <Component {...this.props} />
    }

    render() {
      return this.wrapItem()
    }
  }

  ItemCover.displayName = `itemCover(${ Component.displayName || Component.name || Component })`;

  return ItemCover;
}
