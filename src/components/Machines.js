import React from 'react'
import Items from './items';
export default function Machines({ list, deleteItem }) {
  let len = list.length
  return (
    <>
      <div className='container'>
        <br></br>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {len !== 0 ?
            <>{list.map((element) => {
              return <Items machineData={element} />
            })}</>
            : "No Machine to display!"
          }
        </div>
      </div>
    </>
  )
}
