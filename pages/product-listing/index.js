import React from 'react'
import { createComponent } from 'react-fela'
import Template from '../felaTemplate'
import productListingData from '../../data/productListingData'
import ProductCard from './ProductCard'

const flexContainer = () => ({
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',
margin: '24px 80px',
'@media (max-width: 768px)': {
    margin: '24px'
}
})

const FlexContainer = createComponent(flexContainer, 'div')


const ProductDetailsPage = () => {
    return (
    <Template>
        <FlexContainer>
            {productListingData.map((item, index) => <ProductCard key={index} data={item} />)}
        </FlexContainer>
    </Template>
    )
}

export default ProductDetailsPage
