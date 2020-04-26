import React, {useState, useEffect, useContext} from 'react'
import { BasketContext } from '../../state/basket'
import { WishlistContext } from '../../state/wishlist'
import {HeadingMedium, ParagraphLarge, Prefix} from '../../components/Fonts'
import Button from '../../components/Button'
import CenterContainer from '../../components/CenterContainer'
import VerticalCenterContainer from '../../components/VerticalCenterContainer'
import SizeSelectionArea from '../../components/SizeSelectionArea'
import { Heart, FilledHeart } from '../../svg/wishlistSvgs'
//TODO: Notification pop up
//TODO: Wishlist Icon/SVG
//TODO: Shopping Bag
//TODO: Chevron Arrow
//TODO: Homepage
//TODO: Listing Page

const addToBag =() => {
    console.log('Successfully added to bag', )
}

const ProductDetailsText = ({ productData }) => {
const WishlistAPI = useContext(WishlistContext)
const BasketAPI = useContext(BasketContext)

const [size, setSize] = useState({key: undefined, size: undefined})
const [addToBagDisabled, setAddToBagDisabled] = useState(true)
const [onWishlist, setOnWishlist] = useState(WishlistAPI.getProductIndex(productData.id))

useEffect(()=>{
    setAddToBagDisabled(size.key === undefined)
    setOnWishlist(WishlistAPI.getProductIndex(productData.id))
}, [size, WishlistAPI])

return(
<VerticalCenterContainer>
    <CenterContainer>
        {onWishlist ? <Heart onClick={()=>WishlistAPI.toggleProduct(productData.id)} /> : <FilledHeart onClick={()=>WishlistAPI.toggleProduct(productData.id)}/>}
    </CenterContainer>
    <Prefix>{productData.brand}</Prefix>
    <HeadingMedium>{productData.name}</HeadingMedium>
    <ParagraphLarge>{productData.description}</ParagraphLarge>
    <HeadingMedium>{productData.price}</HeadingMedium>
    <CenterContainer><SizeSelectionArea currentSize={size} setSize={setSize} availableSizes={productData.availableSizes}/></CenterContainer>
    <CenterContainer><Button disabled={addToBagDisabled} onClick={() => BasketAPI.toggleProduct(productData.id)} buttonText='Add to Bag'/></CenterContainer>
</VerticalCenterContainer>
)}

export default ProductDetailsText