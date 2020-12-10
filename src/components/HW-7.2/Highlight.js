import React, { useState } from 'react';
import './Highlight.css'
import List from './List'
import { nanoid } from 'nanoid';

export default function Highlight() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
      id: nanoid()
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
      id: nanoid()
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
      id: nanoid()
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
      id: nanoid()
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
      id: nanoid()
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
      id: nanoid()
    },
  ]);

  return (
    <div className="highlight">
      <List list={list} />
    </div>
  );
}
