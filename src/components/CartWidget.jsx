import '../css/CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <span className="icono-carrito">
      <FaShoppingCart />
    </span>
  );
};

export default CartWidget;