import ProductBack from './images/shoe-image-back.jpg'
import Product from './images/shoe-image.jpg'
import ProductModel from './images/shoe-model-image.jpg'
import ProductOutfit from './images/shoe-outfit-image.jpg'

const productData = {
    id: 123,
    brand: 'Veja',
    name: 'Esplar leather and suede sneakers',
    description: 'Veja\'s \'Esplar\' sneakers are named after the Brazilian NGO the brand has worked with since 2004, which brings technical support to cotton-farming families. This leather version has army-green suede \'V\' appliqués and soles made from wild rubber that\'s been sustainably sourced from the Amazon rainforest.',
    details: ['Rubber sole measures approximately 35mm/ 1.5 inches', 'White leather and army-green suede (Calf)', 'Lace-up front'],
    price: '£80',
    color: 'white',
    availableSizes: [{
        size: 'IT35',
        inStock: false
    }, {
        size: 'IT36',
        inStock: true
    }, {
        size: 'IT37',
        inStock: true
    }, {
        size: 'IT38',
        inStock: true
    }, {
        size: 'IT39',
        inStock: true
    }, {
        size: 'IT40',
        inStock: true
    }, {
        size: 'IT41',
        inStock: true
    }, {
        size: 'IT42',
        inStock: false
    }],
    currency: 'gbp',
    images: [{
            view: 'main',
            src: Product
        },
        {
            view: 'back',
            src: ProductBack
        },
        {
            view: 'model',
            src: ProductModel
        },
        {
            view: 'outfit',
            src: ProductOutfit
        }
    ]
}

export default productData