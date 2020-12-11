import React from 'react'

export default function SortData(Component) {
  return class extends React.Component {
    distinguishMonth(date) {
      return new Date(date).toDateString().slice(4, 7);
    }
    distinguishYear(date) {
      return new Date(date).getFullYear();
    }

    assembleProps() {
      return ({ list:[
        ...this.props.list.map(item => ({ ...item, month: this.distinguishMonth(item.date), year: this.distinguishYear(item.date) }))
      ]});
    }
    
    render() {
      return <Component { ...this.assembleProps() } />
    }
  }
}
