import React from 'react'

export default function DateTimePretty(Component) {
  class DateTimePretty extends React.Component {
    getTimeString(time, initial, first, second) {
      let str = initial;
      if (time.toString().endsWith('1')) {
          str = first;
      } if (['2','3','4'].some(item => time.toString().endsWith(item))) {
          str = second;
      } if (['11','12','13','14'].some(item => time === item)) {
          str = initial;
      }
      return `${ time } ${ str } назад`
    }
  
    prettifyDate(date) {
      const now = new Date();
      const comparedDate = new Date(date);
      const datesDiff = now.getTime() - comparedDate.getTime();
      const msInSecond = 1000;
      const msInMinute = 60 * msInSecond;
      const msInHour = 60 * msInMinute;
      const msInDay = 24 * msInHour;
      const msIn30Days = 30 * msInDay;
      const msIn360Days = 12 * msIn30Days;
  
      if (datesDiff > msIn360Days) {
          const diff = (datesDiff / msIn360Days).toFixed(0);
          return this.getTimeString(diff, 'лет', 'год', 'года');
      }
  
      if (datesDiff > msIn30Days) {
          const diff = (datesDiff / msIn30Days).toFixed(0);
          let time = 'месяцев';
          if (diff === '1') {
              time = 'месяц';
          } if (['2','3','4'].some(item => diff === item)) {
              time = 'месяца';
          }
          return `${ diff } ${ time } назад`;
      }
  
      if (datesDiff > msInDay) {
          const diff = (datesDiff / msInDay).toFixed(0);
          return this.getTimeString(diff, 'дней', 'день', 'дня');
      }
  
      if (datesDiff > msInHour) {
          const diff = (datesDiff / msInHour).toFixed(0);
          return this.getTimeString(diff, 'часов', 'час', 'часа');
      }
  
      if (datesDiff > msInMinute) {
          const diff = (datesDiff / msInMinute).toFixed(0);
          return this.getTimeString(diff, 'минут', 'минуту', 'минуты');
      }
  
      if (datesDiff > msInSecond) {
          const diff = (datesDiff / msInSecond).toFixed(0);
          return this.getTimeString(diff, 'секунд', 'секунду', 'секунды');
      }
  
      return ''
    }

    render() {
      return <Component {...this.props} date={ this.prettifyDate(this.props.date) } />
    }
  };

  DateTimePretty.displayName = `DateTimePretty(${ Component.displayName || Component.name || 'Component' })`

  return DateTimePretty;
}
