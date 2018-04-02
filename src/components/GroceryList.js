import React from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {

  let groceries = props.groceries.map((grocery) => {
    let id = grocery.id
    let name = grocery.name

    let handleDeleteClick = () => props.handleDeleteClick(id)

    return (
      <Grocery
        key={grocery.id}
        name={grocery.name}
        handleDeleteClick={handleDeleteClick}
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
