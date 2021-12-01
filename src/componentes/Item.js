
import { NavLink } from "react-router-dom";


const Item = ({libros}) => {
    return (
        <div className="productCatalogItems">
           <header>
               <img src={libros.pictureurl} alt="Portada libro" width="128" height="170"/>
           </header>
           <h3>{libros.title}</h3>
           <h5>${libros.price}</h5>
           <NavLink to={`/item/${libros.id}`} className="itemMore">Ver más...</NavLink>
        </div>
    )  
}

export default Item;