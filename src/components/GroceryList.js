import React from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {

  let groceries = props.groceries.map((grocery) => {
    
    return (
      <Grocery
        key={grocery.id}
        name={grocery.name}
        handleDeleteClick={props.handleDeleteClick}
      />
    )
  })

  return (
    <ul className="list">
      {groceries}
    </ul>
  )
}

export default GroceryList
