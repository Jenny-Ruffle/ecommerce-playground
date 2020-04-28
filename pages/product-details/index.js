import React from 'react'
import Template from '../felaTemplate'
import productData from '../../data/productData'
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
            <ProductDetailsText productData={productData}/>
            <ImageCarousel images={productData.images}/>
        </StickyColumns>}
        {mobileView && <div><MobileImageCarousel images={productData.images}/><ProductDetailsText productData={productData}/></div>}
    </Template>
    )
}

export default ProductDetailsPage
