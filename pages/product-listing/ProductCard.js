import React, {useContext} from 'react'
import Image from 'next/future/image'
import { createComponent } from 'react-fela'
import { WishlistContext } from '../../state/wishlist'
import {HeadingSmall, ParagraphLarge, Prefix} from '../../components/Fonts'
import { Heart, OutlinedHeart } from '../../svg/wishlistSvgs'

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

const hoverImageContainer = () => ({
    position: 'absolute',
    height: '300px',
    width: '200px',
    top: 0,
    left: 0,
    zIndex: 10,
    transition: 'opacity 0.2s linear',
    ':hover': {
        opacity: 0
    }
})

const HoverImageContainer = createComponent(hoverImageContainer, 'div')

const mainImage = () => ({
    height: '300px',
    width: '200px',
    paddingBottom: '16px',
})

const MainImage = createComponent(mainImage, 'div')

const ProductCard = ({data}) => {
    const {onWishlist, toggleProduct} = useContext(WishlistContext)
    
    return <CardContainer>
        <a style={{textDecoration: 'none'}}href='/product-details'>
        <HoverImageContainer><Image src={data.images[0].src} width="200px" height="300px" style={{objectFit: 'cover'}}/></HoverImageContainer>
        <MainImage><Image src={data.images[2].src} width="200px" height="300px" style={{objectFit: 'cover'}}/></MainImage>
        <Prefix>{data.brand}</Prefix>
        <HeadingSmall hover={true} >{data.name}</HeadingSmall>
        <ParagraphLarge >{data.price}</ParagraphLarge>
        </a>
        <SvgContainer>
            {onWishlist(data.id) ? <Heart onClick={()=>toggleProduct(data.id)} /> : <OutlinedHeart onClick={()=>toggleProduct(data.id)}/>}
        </SvgContainer>
    </CardContainer>
}

export default ProductCard