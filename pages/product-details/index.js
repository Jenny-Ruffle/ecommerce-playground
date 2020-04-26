import React from 'react'
import Template from '../felaTemplate'
import productData from '../../data/productData'
import StickyColumns from '../../components/StickyColumns'
import ProductDetailsText from './ProductDetailsText'
import ImageCarousel from '../../components/ImageCarousel'

const ProductDetailsPage = () => {
    return (
    <Template>
        <StickyColumns>
            <ProductDetailsText productData={productData}/>
            <ImageCarousel images={productData.images}/>
        </StickyColumns>
    </Template>
    )
}

export default ProductDetailsPage
