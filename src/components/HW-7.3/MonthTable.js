import React from 'react'
import { nanoid } from 'nanoid'
import SortData from './SortData'

function MonthTable(props) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </tbody>
        {props.list.map(item => (
          <tbody key={ nanoid() }>
            <tr>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SortData(MonthTable)
