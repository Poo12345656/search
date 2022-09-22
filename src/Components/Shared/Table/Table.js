import React from 'react'
import "./Table.css"

function Table({column,row}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {
              column.map((col)=>{
                return <th>{col}</th>

              })
            }
          </tr>
        </thead>
        <tbody>
          {
            row.map((row)=>{
              return <tr>
                {
                  row.map((col)=>{
                    return <td>{col}</td>
                  })
                }
              </tr>
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Table