import React, { useState } from 'react'
import { removeProduct } from '../utils/removeProduct'

export const WishlistContext = React.createContext(null)

export const WishlistContextProvider = ({ children } ) => {
    const [wishlist, setWishlist] = useState([])
    const toggleProduct = (product) => {
        const updatedProducts = wishlist.find((item) => item.key === product) ? removeProduct(wishlist, product) : [...wishlist, { key: product }]
        setWishlist(updatedProducts)
    }
    const onWishlist = (product) => {
        if (wishlist.some(e => e.key === product)) {
            const inWishlist = true
            return inWishlist
        }
        return false  
    }
    return <WishlistContext.Provider value={{wishlist, setWishlist, toggleProduct, onWishlist}}>{children}</WishlistContext.Provider>
  }