import React from 'react'
import DateTime from './DateTime'

export default function Video(props) {
  return (
      <div className="time_task__video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="..."></iframe>
          <DateTime date={ props.date } />
      </div>
  )
}
