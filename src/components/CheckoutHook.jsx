import React, { useContext, useState } from 'react'
import '../css/CheckoutHook.css';
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { dataBase } from '../service/firebase'
import { useForm } from 'react-hook-form';

const CheckoutHook = () => {
    const [orderId, setOrderId]= useState('')
    const {register, handleSubmit, formState:{errors}, getValues}=useForm()
    const {cart, cartTotal, clear}= useContext(CartContext)
    
    const finalizarCompra = (dataDelForm) => {

    const order = {
      comprador:{
        name: dataDelForm.name,
        lastname: dataDelForm.lastname,
        address: dataDelForm.address,
        email: dataDelForm.email,
    },
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
    ?<div className='checkout-container'>
        <h2>Realizaste la compra con éxito</h2>
        <h3>Id de la compra: {orderId}</h3>
    </div>
    : <div className='checkout-container'>
        <h1>Complete con sus datos</h1>
          <form onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control' type='text' name='name' placeholder='Ingrese su nombre' {...register("name", {required:true, minLength:3})}/>
                {errors?.name?.type === 'required' && <span style={{color:'red'}}>Por favor, complete este campo</span>}
                {errors?.name?.type === 'minLength' && <span style={{color:'red'}}>Este campo debe contener al menos 3 caracteres</span>}
            <input className='form-control' type='text' name='lastname' placeholder='Ingrese su apellido' {...register("lastname", {required:true, minLength:2})}  />
               {errors?.lastname?.type === 'required' && <span style={{color:'red'}}>Por favor, complete este campo</span>}
               {errors?.lastname?.type === 'minLength' && <span style={{color:'red'}}>Este campo debe contener al menos 2 caracteres</span>}
            <input className='form-control' type='text' name='address' placeholder='Ingrese su dirección' {...register("address", {required:true, minLength:10, maxLength:35})}/>
                {errors?.address?.type === 'required' && <span style={{color:'red'}}>Por favor, complete este campo</span>}
                {errors?.address?.type === 'minLength' && <span style={{color:'red'}}>Este campo debe contener al menos 10 caracteres</span>}
                {errors?.address?.type === 'maxLength' && <span style={{color:'red'}}>El campo dirección es demasiado largo</span>}
            <input className='form-control' type='email' name='email' placeholder='Ingrese su correo'  {...register("email", {required:true})} />
                {errors?.email?.type === 'required' && <span style={{color:'red'}}>Por favor, complete este campo</span>}
            <input className='form-control' type='email' name='second-email' placeholder='Repita su correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
                {errors?.secondemail?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                {errors?.secondemail?.type === 'equalsMails' && <span style={{color:'red'}}>Los mails deben ser iguales</span>}
            <div className='btn-container'>
                <button className='btn' type='submit' disabled={!cart.length}>Enviar</button>
            </div>
        </form>
    </div>
   }
   </>
  )
}

export default CheckoutHook