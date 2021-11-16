
import { createContext, useState } from "react";

export const storeContext = createContext();

const { Provider } = storeContext;

const ShoppingContext = ({children}) => {

    const [products, setProducts] = useState([])

    const addItem = (books, dataCounter) => {
        const proof = isInCart(books)
        if (proof) {
            setProducts(products.map(item => item.id === books.id ? {...books, dataCounter: item.dataCounter + dataCounter } : item))
        } else {
            setProducts([...products, {...books, dataCounter }])
        }
    }

    const isInCart = (books) => {
        return products.find(item => item.id === books.id)
    }

    const removeItem = (id) => {
        setProducts(products.filter(item => item.id !== id))
    }

    const totalProductsPrice = () => {
        return products.reduce((add, item) => add + item.price * item.dataCounter, 0)  
    }

    const cartWidgetCount = () => {
        return products.reduce((add, item) => (add += item.dataCounter), 0)
    }

    const clearCart = () => {
        setProducts([])
    }

    const valueContext = {products, addItem, removeItem, totalProductsPrice, cartWidgetCount, clearCart}

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}

export default ShoppingContext;