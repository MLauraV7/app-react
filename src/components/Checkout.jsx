import React, { useContext, useState } from 'react'
import '../css/Checkout.css';
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { dataBase } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId]= useState('')
    const [error, setError] = useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const buyerData = (event)=> {
        setBuyer(
            {
                ...buyer,
                [event.target.name]: event.target.value
            }
        )
    }
    console.log(buyer)
    const finalizarCompra = (event) => {
        event.preventDefault();
    if (
      !buyer.name?.trim() || !buyer.lastname?.trim() || !buyer.email?.trim() || !buyer.address?.trim()
    ) {
      setError('Favor de completar todos los campos.');
      return;
    }
    if (buyer.email !== validMail) {
      setError('Los emails no coinciden.');
      return
    }
    setError('');

    const order = {
      comprador: buyer,
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(dataBase, "orders");
    addDoc(ventas, order)
      .then((respuesta) => {
        setOrderId(respuesta.id);
        clear();
      })
      .catch((error) => console.log(error));
  };
  return (
   <>
   {
    orderId 
    ?<div>
        <h2>Realizaste la compra con éxito</h2>
        <h3>Id de la compra: {orderId}</h3>
    </div>
    : <div className='checkout-container'>
        <h1>Complete con sus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input className='form-control' type='text' name='name' placeholder='Nombre' onChange={buyerData}/>
              <input className='form-control' type='text' name='lastname' placeholder='Apellido' onChange={buyerData}/>
                <input className='form-control' type='text' name='address' placeholder='Dirección' onChange={buyerData}/>
                  <input className='form-control' type='email' name='email' placeholder='Ingrese su e-mail' onChange={buyerData}/>
                  <input className='form-control' type='email' name='second-email' placeholder='Repita su e-mail' onChange={(event)=> setValidMail(event.target.value)}/>
            {error && <p className='error-mensaje'>{error}</p>}
            <button className='btn' type='submit'>Enviar</button>
        </form>
    </div>
   }
   </>
  )
}

export default Checkout