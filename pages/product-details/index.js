import React from 'react'
import Template from '../felaTemplate'
import productData from '../../data/productData'

const ProductDetails = () => (
    <Template>
        <div>TODO: Product Details area</div>
        <div>{productData.brand}</div>
        <div>{productData.name}</div>
        <div>{productData.description}</div>
        <div>{productData.currency} {productData.price}</div>
        <div>{productData.details}</div>
        <div>TODO: Size dropdown </div>
        <div>TODO: color selection </div>
        <div>TODO: Image carousel/Sticky image gallery</div>
        <img src={productData.images[0]}/>
    </Template>
)

export default ProductDetails
