import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className="table-header">
                <tr className="table-row">
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr className="table-boody">
                    <td>Saqib</td>
                    <td>24</td>
                    <td>95</td>
                    <td>passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
