import React, {useState} from 'react'
import { removeProduct } from '../utils/removeProduct'

export const BasketContext = React.createContext(null)

export const BasketContextProvider = ({ children }) => {
    const [basket, setBasket] = useState([])
    const addProduct = (product) => {
        const updatedProducts = [...basket, { key: product }]
        setBasket( updatedProducts )
    };
    const deleteProduct = (product) => {
        const updatedProducts = removeProduct(basket, product) 
        setBasket( updatedProducts )
    };

    return <BasketContext.Provider value={{basket, setBasket, addProduct, deleteProduct}}>{children}</BasketContext.Provider>
}