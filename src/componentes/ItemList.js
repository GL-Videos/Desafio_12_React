import Item from './Item'


const ItemList = ({items}) =>{
   
    return (
        <>
        {items.map(item =>
            <Item key={item.id} libros={item}/>)}
        </>
    )
}

export default ItemList;