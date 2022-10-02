import React from 'react'
import Template from '../felaTemplate'
import {productOne} from '../../data/productData'
import useMobileView from '../../utils/useMobileView'
import StickyColumns from '../../components/StickyColumns'
import ProductDetailsText from './ProductDetailsText'
import ImageCarousel from '../../components/ImageCarousel'
import MobileImageCarousel from '../../components/MobileImageCarousel'

const ProductDetailsPage = () => {
    const mobileView = useMobileView()
    return (
    <Template>
        {!mobileView && <StickyColumns>
            <ProductDetailsText productData={productOne}/>
            <ImageCarousel images={productOne.images}/>
        </StickyColumns>}
        {mobileView && <div><MobileImageCarousel images={productOne.images}/><ProductDetailsText productData={productOne}/></div>}
    </Template>
    )
}

export default ProductDetailsPage
