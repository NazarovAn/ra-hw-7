import React from 'react'
import { nanoid } from 'nanoid'
import SortData from './SortData'

function YearTable(props) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </tbody>
        {props.list.map(item => (
          <tbody key={ nanoid() }>
            <tr>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SortData(YearTable);
