import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../css/CartView.css';
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, clear, removeItem, cartTotal}= useContext(CartContext)

    const preConfirm = () =>{
        Swal.fire({
            title:'¿Desea eliminar los productos del carrito?',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Sí'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }
        })
    }
  return (
    <div className='cart-view'>
        <h2>Tu carrito 🛒</h2>

        <div className='cart-items'>
            {
                cart.map((compra)=>(
                    <div key={compra.id} className='cart-item'>
                            <img src={compra.img} alt={compra.name}/>
                            <span>{compra.name}</span>
                            <span>${compra.price},00</span>
                            <span>{compra.quantity}</span>
                            <span>precio final:${compra.price * compra.quantity},00</span>
                            <button className='btn' onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        <div className='cart-summary'>
            <span>Total a pagar:${cartTotal()} </span>
        </div>
        <div className='cart-actions'>
            <button className='btn' onClick={preConfirm}> Vaciar carrito</button>
            <Link className='btn' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
  )
}
export default CartView