import React from 'react'
import Item from './Item'
import '../css/Item.css';

const ItemList = ({data}) => {
  return (
    <div className="card-container">
        {data.map((producto)=> <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList