import ProductBack from '../public/images/shoe-image-back.jpg'
import ProductTwoBack from '../public/images/Product2/shoe-image-back.jpg'
import ProductThreeBack from '../public/images/Product3/shoe-image-back.jpg'

import Product from '../public/images/shoe-image.jpg'
import ProductTwo from '../public/images/Product2/shoe-image.jpg'
import ProductThree from '../public/images/Product3/shoe-image.jpg'

import ProductModel from '../public/images/shoe-model-image.jpg'
import ProductTwoModel from '../public/images/Product2/shoe-model-image.jpg'
import ProductThreeModel from '../public/images/Product3/shoe-model-image.jpg'

import ProductOutfit from '../public/images/shoe-outfit-image.jpg'
import ProductTwoOutfit from '../public/images/Product2/shoe-outfit-image.jpg'
import ProductThreeOutfit from '../public/images/Product3/shoe-outfit-image.jpg'


export const productOne = {
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

export const productTwo = {
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
            src: ProductTwo
        },
        {
            view: 'back',
            src: ProductTwoBack
        },
        {
            view: 'model',
            src: ProductTwoModel
        },
        {
            view: 'outfit',
            src: ProductTwoOutfit
        }
    ]
}

export const productThree = {
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
            src: ProductThree
        },
        {
            view: 'back',
            src: ProductThreeBack
        },
        {
            view: 'model',
            src: ProductThreeModel
        },
        {
            view: 'outfit',
            src: ProductThreeOutfit
        }
    ]
}

export const productFour = {...productOne, id: 77777}

export const productFive = {...productTwo, id: 77377}

export const productSix = {...productThree, id: 72257}

export const productSeven = {...productOne, id: 33777}

export const productEight = {...productTwo, id: 77771}

export const productNine = {...productThree, id: 77772}