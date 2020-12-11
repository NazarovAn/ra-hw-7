import React from 'react';
import './Aggregation.css';
import SortTable from './SortTable';
import YearTable from './YearTable';
import MonthTable from './MonthTable';

export default class Aggregation extends React.Component {
  state = {
    list: []
  };

  async getList() {
    const res = await fetch(process.env.REACT_APP_AGGREGATION_URL);
    const json = await res.json();
    this.setState((prev) => ({ ...prev, list: [...json.list] }));
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list } = this.state;
    return (
      <div className="aggregation_app">
        <MonthTable list={list} />
        <YearTable list={list} />
        <SortTable list={list} />
      </div>
    );
  }
}
