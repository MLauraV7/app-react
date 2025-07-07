import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {
  const {addItem} = useContext(CartContext)
  const [compraProd, setCompraProd] = useState(false)
  const onAdd = (cantidad)=>{
    addItem(detail, cantidad)
    setCompraProd(true)
  }
  useEffect(() => {
  setCompraProd(false);
  }, [detail]);

  return (
    <div className="card-detail-wrapper">
      <div className="card-detail">
          <h2>{detail.name}</h2>
          <img src={detail.img} alt={detail.name}/>
          <p>{detail.description}</p>
          <p>${detail.price},00</p>
          <p>Stock disponible: {detail.stock}</p>
          {
            compraProd ? <Link className='compra' to= '/cart'> Ir al carrito </Link>
          : <ItemCount stock={detail.stock} onAdd={onAdd}/>} 
      </div>
    </div>
  )
}

export default ItemDetail