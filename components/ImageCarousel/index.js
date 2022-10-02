import Image from 'next/future/image'
import { createComponent } from 'react-fela'

const slideContainer = () => ({
    scrollSnapType: 'y proximity',
    position: 'relative',
    overflow: 'scroll',
    height: '100vh',
    margin: 'auto'
})
  
const SlideContainer = createComponent(slideContainer, 'div')
  
const imageSlide = () => ({
    maxWidth: '50vw',
    width: '66vh',
    maxHeight: '100vh',
    padding: '0 ',
    scrollSnapAlign: 'start'
})
const ImageSlide = createComponent(imageSlide, 'div')
  

const ImageCarousel = ({images}) => {
    return(
        <SlideContainer>
            {images.map((item, index)=>(<ImageSlide key={`carousel-product-image-${index}`}><Image src={item.src}  style={{width: '100%', height: '100%', objectFit: 'cover'}}/></ImageSlide>))}
        </SlideContainer>
    )
}

export default ImageCarousel