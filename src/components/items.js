import React from 'react'

export default function AddItems(props) {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Name:{props.machineData.Name}</h5>
      <p class="card-text">Id:{props.machineData.Id}</p>
      <p class="card-text">Temperature:{props.machineData.temp}</p>
      <p class="card-text">X coordinate:{props.machineData.X}</p>
      <p class="card-text">Y coordinate:{props.machineData.Y}</p>
      <button type="button" class="btn btn-danger" onClick={()=>{props.deleteItem(props.machineData)}}>Delete</button>
    </div>
  </div>
  )
}