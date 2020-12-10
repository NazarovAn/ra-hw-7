import React, { useState } from 'react'
import VideoList from './VideoList'
import './Time.css'

export default function Time() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
      {
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2020-12-10 19:00:00'
      },
      {
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2019-03-03 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2020-02-03 23:16:00'
      },
      {
          url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2020-10-03 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2020-12-09 16:17:00'
      },
      {
          url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2020-12-10 19:03:55'
      },
  ]);

  return (
    <div className="time_task">
      <VideoList list={list} />
    </div>
  );
}
