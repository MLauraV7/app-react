import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../css/CartWidget.css';

const CartWidgetIcons = () => {
  const { cartQuantity } = useContext(CartContext);
  const quantity = cartQuantity();

  return (
    quantity > 0 && <span className="cart-badge">{quantity}</span>
  );
};

export default CartWidgetIcons;