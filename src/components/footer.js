import React from 'react'

export default function footer() {
  let footerStyle={
    position:"sticky",
    width:"100%",
    top:"100"
  }
  return (
    <>
       <div>
        <p className="bg-dark text-light py-4 text-center position-fixed " style={footerStyle}>copyright &copy; Vibration Lab 2023 </p>
       </div>
    </>
  )
}