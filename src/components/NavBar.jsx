import '../css/NavBar.css'
import CartWidget from './CartWidget'
import CartWidgetIcons from './CartWidgetIcons'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav-container">
            <div className="logo-container">
                <NavLink to="/">
                    <img src="/logo-amatista.png" alt="Amatista Store Logo" className="logo-img" />
                </NavLink>
            </div>
            <NavLink className="nav-link" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="nav-link" to="/category/mas vendidos">Más vendidos</NavLink>
            <NavLink className="nav-link" to="/category/ofertas">Ofertas</NavLink>
            <NavLink className="nav-link" to="/cart">
                <div className="cart-container">
                <CartWidget />
                <CartWidgetIcons />
                </div>
            </NavLink>
        </nav>
    );
};
export default NavBar