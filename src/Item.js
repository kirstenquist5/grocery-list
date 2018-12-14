import React from 'react'


const Item = ({id, name, price, complete, itemClick}) => {
  return (
    <li 
      style={ complete ? {...styles.item, ...styles.complete} : styles.item}
      onClick={() => itemClick(id)}
    >{name}</li>
  )
}

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

export default Item;