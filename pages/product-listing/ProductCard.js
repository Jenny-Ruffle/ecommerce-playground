import React, {useState, useEffect, useContext} from 'react'
import { createComponent } from 'react-fela'
import { WishlistContext } from '../../state/wishlist'
import CenterContainer from '../../components/CenterContainer'
import Image from '../../components/Image'
import {HeadingSmall, ParagraphLarge, Prefix} from '../../components/Fonts'
import { Heart, FilledHeart } from '../../svg/wishlistSvgs'

const cardContainer = () => ({
    width: '200px',
    margin: '12px',
    height: 'max-content',
    position: 'relative'
})

const CardContainer = createComponent(cardContainer, 'div')

const svgContainer = () => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    zIndex: 2
})

const SvgContainer = createComponent(svgContainer, 'div')

const imageContainer = () => ({
    position: 'absolute',
    height: '300px',
    width: '200px',
    top: 0,
    left: 0,
    transition: 'opacity 0.2s linear',
    ':hover': {
        opacity: 0
    }
})

const ImageContainer = createComponent(imageContainer, 'div')


const ProductCard = ({data}) => {
    const WishlistAPI = useContext(WishlistContext)
    const [onWishlist, setOnWishlist] = useState(WishlistAPI.getProductIndex(data.id))

    useEffect(()=>{
        setOnWishlist(WishlistAPI.getProductIndex(data.id))
    }, [ WishlistAPI])

    return <CardContainer>
        <a style={{textDecoration: 'none'}}href='/product-details'>
        <ImageContainer><Image src={data.images[0].src}/></ImageContainer>
        <Image src={data.images[2].src}/>
        <Prefix>{data.brand}</Prefix>
        <HeadingSmall hover={true} >{data.name}</HeadingSmall>
        <ParagraphLarge >{data.price}</ParagraphLarge>
        </a>
        <SvgContainer>
            {onWishlist ? <Heart onClick={()=>WishlistAPI.toggleProduct(data.id)} /> : <FilledHeart onClick={()=>WishlistAPI.toggleProduct(data.id)}/>}
        </SvgContainer>
    </CardContainer>
}

export default ProductCard