import ProductBack from './images/Product3/shoe-image-back.jpg'
import Product from './images/Product3/shoe-image.jpg'
import ProductModel from './images/Product3/shoe-model-image.jpg'
import ProductOutfit from './images/Product3/shoe-outfit-image.jpg'

const productThreeData = {
    id: 12345,
    brand: 'Veja',
    name: 'Rio Branco leather-trimmed mesh and suede sneakers',
    description: 'Veja is committed to manufacturing its sneakers without harming people or the environment - these \'Rio Branco\' sneakers are made from the label\'s breathable Hexamesh that\'s blended with organic cotton and recycled polyester. They\'re paneled with water-repellent suede and leather and set on rubber soles sourced from the Amazon rainforest. Wear yours on the weekend with jeans or a midi skirt.',
    details: ['Rubber sole measures approximately 35mm/ 1.5 inches', 'White leather and army-green suede (Calf)', 'Lace-up front'],
    price: '£110',
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
        inStock: false
    }, {
        size: 'IT40',
        inStock: true
    }, {
        size: 'IT41',
        inStock: false
    }, {
        size: 'IT42',
        inStock: true
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

export default productThreeData