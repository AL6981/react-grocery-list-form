import React from 'react'

const Grocery = (props) => {
  return (
    <li className="item">
      {props.name}
      <button type="button" onClick={props.handleDeleteClick}>Delete</button>
    </li>
  )
}

export default Grocery
