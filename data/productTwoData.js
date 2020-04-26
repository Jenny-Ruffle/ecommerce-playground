import ProductBack from './images/Product2/shoe-image-back.jpg'
import Product from './images/Product2/shoe-image.jpg'
import ProductModel from './images/Product2/shoe-model-image.jpg'
import ProductOutfit from './images/Product2/shoe-outfit-image.jpg'

const productTwoData = {
    id: 1234,
    brand: 'Veja',
    name: 'Esplar rubber-trimmed organic cotton-canvas sneakers',
    description: 'There are so many reasons to invest in a pair of Veja\'s sneakers - they\'re made from ethically sourced materials, so you\'ll feel good about wearing them, and go with pretty much any outfit, too. This \'Esplar\' version is crafted from durable organic cotton-canvas and trimmed with contrasting rubber patches for a pretty pop of color. Wear yours with mini dresses and jeans alike.',
    details: ['Rubber sole measures approximately 35mm/ 1.5 inches', 'White leather and army-green suede (Calf)', 'Lace-up front'],
    price: '£90',
    color: 'white',
    availableSizes: [{
        size: 'IT35',
        inStock: true
    }, {
        size: 'IT36',
        inStock: true
    }, {
        size: 'IT37',
        inStock: true
    }, {
        size: 'IT38',
        inStock: false
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

export default productTwoData