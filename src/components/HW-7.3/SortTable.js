import React from 'react'
import { nanoid } from 'nanoid'
import SortData from './SortData'

function SortTable(props) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </tbody>
        {props.list.map(item => (
          <tbody key={ nanoid() }>
            <tr>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SortData(SortTable);