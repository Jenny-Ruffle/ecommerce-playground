import React, {useState, useEffect, useContext} from 'react'
import { BasketContext } from '../../state/basket'
import { WishlistContext } from '../../state/wishlist'
import {HeadingMedium, ParagraphLarge, Prefix} from '../../components/Fonts'
import Button from '../../components/Button'
import CenterContainer from '../../components/CenterContainer'
import VerticalCenterContainer from '../../components/VerticalCenterContainer'
import SizeSelectionArea from '../../components/SizeSelectionArea'
import { Heart, OutlinedHeart } from '../../svg/wishlistSvgs'
//TODO: Notification pop up
//TODO: Chevron Arrow

const ProductDetailsText = ({ productData }) => {
const { onWishlist, toggleProduct } = useContext(WishlistContext)
const { addProduct, } = useContext(BasketContext)

const [size, setSize] = useState({key: undefined, size: undefined})
const [addToBagDisabled, setAddToBagDisabled] = useState(true)

useEffect(()=>{
    setAddToBagDisabled(size.key === undefined)
}, [size])

return(
<VerticalCenterContainer>
    <CenterContainer>
        {onWishlist(productData.id) ? 
        <Heart onClick={()=>toggleProduct(productData.id)} /> : 
        <OutlinedHeart onClick={()=>toggleProduct(productData.id)}/>}
    </CenterContainer>
    <Prefix>{productData.brand}</Prefix>
    <HeadingMedium>{productData.name}</HeadingMedium>
    <ParagraphLarge>{productData.description}</ParagraphLarge>
    <HeadingMedium>{productData.price}</HeadingMedium>
    <CenterContainer>
        <SizeSelectionArea currentSize={size} setSize={setSize} availableSizes={productData.availableSizes}/>
    </CenterContainer>
    <CenterContainer>
        <Button disabled={addToBagDisabled} onClick={() => addProduct(productData.id)} buttonText='Add to Bag'/>
    </CenterContainer>
</VerticalCenterContainer>
)}

export default ProductDetailsText