import React, {useState, useEffect} from 'react'

const removeProduct = (array, value) => array.filter(({ key }) => key !== value)

export class BasketAPI {
    constructor() {
      const [basket, setBasket] = useState([])
      this.setBasket = setBasket
      this.basket = basket
    }
  
    addProduct(product) {
        const updatedProducts = [...this.basket, { key: product }]
        this.setBasket( updatedProducts )
    }
    removeProduct(product) {
        const updatedProducts = removeProduct(this.basket, product) 
        this.setBasket( updatedProducts )
    }
}

export const BasketContext = React.createContext(null)

export const BasketContextProvider = ({ children } ) => {
    const api = new BasketAPI()
    return <BasketContext.Provider value={api}>{children}</BasketContext.Provider>
  }