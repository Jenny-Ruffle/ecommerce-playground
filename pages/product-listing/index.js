import React from 'react'
import { createComponent } from 'react-fela'
import Template from '../felaTemplate'
import productListingData from '../../data/productListingData'
import ProductCard from './ProductCard'

const flexContainer = () => ({
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',
margin: '24px 80px'
})

const FlexContainer = createComponent(flexContainer, 'div')


const ProductDetailsPage = () => {
    return (
    <Template>
        <FlexContainer>
            {productListingData.map((item) => <ProductCard data={item} />)}
        </FlexContainer>
    </Template>
    )
}

export default ProductDetailsPage
