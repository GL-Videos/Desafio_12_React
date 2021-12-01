import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../context/cartContext";
import { CgShoppingCart } from 'react-icons/cg';


const CartWidget = () => {

    const {cartWidgetCount} = useContext(storeContext);

    return(
        <NavLink to={`/cart`}>
            <span><CgShoppingCart className="cartWidgetIcon"/></span>
            {cartWidgetCount() === 0 ? null : <span>{cartWidgetCount()}</span>}
        </NavLink>
    )
}

export default CartWidget;