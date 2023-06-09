import React from 'react'
import PropTypes from 'prop-types'
export default function header(props) {
  return (
       <>
        <div>
        <p className=" py-4 text-center align-text-top">
            <h1>Factory Digital Twin</h1>
        </p>
       </div>
       </>
  )
}
header.defaultProps = {
    title:"Set your title",
    searchBar: false
}
header.propTypes = {
    title:PropTypes.string,
    searchBar:PropTypes.bool
}