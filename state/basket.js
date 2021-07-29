import React, {useState} from 'react'

const removeProduct = (array, value) => array.filter(({ key }) => key !== value)

export class BasketAPI {
    constructor() {
        const [basket, setBasket] = useState([])
        this.setBasket = setBasket
        this.basket = basket
    };
  
    addProduct(product) {
        const updatedProducts = [...basket, { key: product }]
        setBasket( updatedProducts )
    };
    deleteProduct(product) {
        const updatedProducts = removeProduct(basket, product) 
        setBasket( updatedProducts )
    };
}

export const BasketContext = React.createContext(null)

export const BasketContextProvider = ({ children } ) => {
    const api = new BasketAPI()
    return <BasketContext.Provider value={api}>{children}</BasketContext.Provider>
  }