import React from 'react'
import Items from './items';
export default function Machines({ list, deleteItem }) {
  let len = list.length
  return (
    <>
      <div className='container'>
        <h3 className='text-center'>Here are Machine Data</h3>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {len !== 0 ?

            <>{list.map((element) => {
              return <Items machineData={element} deleteItem={deleteItem} />
            })}</>
            : "No Machine to display!"
          }
        </div>
      </div>
    </>
  )
}
