import React, { useState, useEffect } from 'react'
import '../css/ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const sumar = () =>{
        if(count < stock) {
            setCount(count +1)
        }
    }
    const restar = () =>{
        if(count > 0){
            setCount(count -1)
        }
    }
    const comprar = () => {
        onAdd(count)
    }
    
  return (
    <div>
        <div>
            <button className='btn' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
            <button className='btn' onClick={sumar}>+</button>
        </div>
        <button className='compra' disabled={stock === 0 || count === 0} onClick={comprar} >Comprar</button>
    </div>
    )
}

export default ItemCount