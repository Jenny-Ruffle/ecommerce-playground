import React, { useState } from 'react'

const removeProduct = (array, value) => array.filter(({ key }) => key !== value)

export class WishlistAPI {
    constructor() {
      const [wishlist, setWishlist] = useState([])
      this.setWishlist = setWishlist
      this.wishlist = wishlist
    }

    toggleProduct(product) {
        const updatedProducts = this.wishlist.find((item) => item.key === product) ? removeProduct(this.wishlist, product) : [...this.wishlist, { key: product }]
        this.setWishlist(updatedProducts)
    }
    
    getProductIndex(product) {
        if (this.wishlist.some(e => e.key === product)) {
            const inWishlist = true
            return inWishlist
        }
        return false  
    }
}

export const WishlistContext = React.createContext(null)

export const WishlistContextProvider = ({ children } ) => {
    const api = new WishlistAPI()
    return <WishlistContext.Provider value={api}>{children}</WishlistContext.Provider>
  }