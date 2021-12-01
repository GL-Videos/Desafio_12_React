
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget.js'

const Header = () => {
    return(
        <header className="principalHeader">
            <nav className="menu">
                <NavLink to="/" exact>Inicio</NavLink>
                <NavLink to="/categoria/libros">Libros</NavLink>
                <NavLink to="/categoria/sagas">Sagas</NavLink>
                <NavLink to="/shopping-cart" exact><CartWidget/></NavLink>
            </nav>
        </header>
    )
}

export default Header;