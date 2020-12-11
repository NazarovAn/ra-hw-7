import React from 'react'

export default function SortData(Component) {
  return class extends React.Component {
    distinguishYear(date) {
      return new Date(date).getFullYear();
    }
    distinguishMonth(date) {
      return new Date(date).toDateString().slice(4, 7);
    }

    sortBy(array, order) {
      switch (order) {
        case 'year':
          return array.sort((a, b) => b.year - a.year);
        case 'month':
          return array.sort((a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth() );
        default:
          return array.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      }
    }

    assembleProps(order) {
      let { list } = this.props;
      if (order === 'year') {
        list = list.map(item => ({ ...item, year: this.distinguishYear(item.date) }));
      } if (order === 'month') {
        list = list.map(item => ({ ...item, month: this.distinguishMonth(item.date) }));
      }

      return ({ list: this.sortBy(list, order) });
    }
    
    render() {
      switch (Component.name) {
        case 'YearTable':
          return <Component { ...this.assembleProps('year') } />      
        case 'MonthTable':
          return <Component { ...this.assembleProps('month') } />          
        default:
          return <Component { ...this.assembleProps() } />
      }
    }
  }
}
