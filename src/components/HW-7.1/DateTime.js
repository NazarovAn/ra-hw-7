import React from 'react'
import DateTimePretty from './DateTimePretty'

function DateTime(props) {
  return (
      <p className="time_task__date">{props.date}</p>
  )
}

export default DateTimePretty(DateTime)
