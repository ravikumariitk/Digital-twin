import React from 'react'

export default function AddItems(props) {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Name:</b>{props.machineData.Name}</h5>
      <p class="card-text"><b>Id:</b>{props.machineData.Id}</p>
      <p class="card-text"><b>Temperature:</b>{props.machineData.temp}</p>
      <p class="card-text"><b>X coordinate:</b>{props.machineData.X}</p>
      <p class="card-text"><b>Y coordinate:</b>{props.machineData.Y}</p>
    </div>
  </div>
  )
}