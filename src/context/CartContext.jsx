import { createContext, useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            const carritoActualizado = cart.map((producto)=>{
                if(item.id === producto.id){
                    return {...producto, quantity: producto.quantity + cantidad}
                }else{
                    return producto
                }
            })
            setCart(carritoActualizado)
        }else{
            setCart([...cart, {...item,quantity:cantidad}])
        }
    }
    const removeItem = (id) =>{
        setCart(cart.filter((producto)=> producto.id !== id))
    }
    const clear = () =>{
        setCart([])
    }
    const isInCart= (id) =>{
        return cart.some((producto)=> producto.id === id)
    }
    const cartQuantity = () => {
        return cart.reduce((acc, producto) => acc + producto.quantity, 0)
    }
    const cartTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.price * producto.quantity, 0)
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}