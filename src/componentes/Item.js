
import { NavLink } from "react-router-dom";

// Hago la grilla que va a mostar la lista de productos con sus respectivas referencias. Uso el valor de prop libros, para poder traer dentro de cada etiqueta el valor que yo quiero.

const Item = ({libros}) => {


    return (
        <>
        <div className="productCatalogItems">
           <header>
               <img src={libros.pictureurl} alt="Portada libro" width="128" height="170"/>
           </header>
           <h3>{libros.title}</h3>
           <h5>${libros.price}</h5>
           <NavLink to={`/item/${libros.id}`} className="itemMore">Ver más...</NavLink>
        </div>
        </>
    )
    
}

export default Item;