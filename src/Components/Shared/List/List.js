import React from 'react'
import "./List.css"

function List({list=[],type}) {
  return (
    <div className='listSearch'>
        <ul className='listItem'>
            {
                list.map((itm,index)=>{
                    return <li key={index}>{itm}</li>
                })
            }
        </ul>
    </div>
  )
}

export default List