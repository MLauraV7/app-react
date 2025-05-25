import '../css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav className="nav-container">
            <a className="nav-link" href="">Shop</a>
            <a className="nav-link" href="">Nuevos</a>
            <a className="nav-link" href="">Más vendidos</a>
            <a className="nav-link" href="">Ofertas</a>

            <CartWidget/>
        </nav>
    )
}
export default NavBar