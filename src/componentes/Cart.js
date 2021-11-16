import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../context/cartContext";



const Cart = () => {

    const {products, removeItem, totalProductsPrice, clearCart} = useContext(storeContext);

    if(products.length === 0){
        return (
                <div>
                    <h3 className="textCart">No hay productos agregados al Carrito</h3>
                    <NavLink to="/" exact className="keypadCart">
                        <button className="finishShop">Ir al catálogo</button>
                    </NavLink>
                </div>
        )
    } else {
        return (
            <div>
                <h3 className="textCart">Carrito de Compras</h3>
                <div className="containerCart">
                    {products.map(books => (
                        <div key={books.id} className="containerProduct">
                            <img src={books.pictureurl} alt="Foto del producto" width="80"/>
                            <h4>{books.title}</h4>
                            <h4>${books.price}</h4>
                            <h4>Cantidad: {books.dataCounter}</h4>
                            <h4>SubTotal: $ {books.price * books.dataCounter}</h4>
                            <button className="btnRemove" onClick={() => removeItem(books.id)}>X</button>
                        </div>
                    ))}
                </div>
                    <h3 className="textCartFinish">Total de la compra: $ {totalProductsPrice()}</h3>
                <div className="keypadCart">
                    <NavLink to="/" exact>
                        <button className="buttonCart">Seguir Comprando</button>
                    </NavLink>
                    <button className="finishShop">Finalizar</button>
                    <button className="btnEmpty" onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>
            </div>
        )
    }

}

export default Cart
