import Image from 'next/future/image'
import { createComponent } from 'react-fela'

const slideContainer = () => ({
    scrollSnapType: 'x mandatory',
    position: 'relative',
    overflowX: 'auto',
    overflowY: 'hidden',
    flexWrap: 'nowrap',
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    '::-webkit-scrollbar': { display: 'none' },

})
  
const SlideContainer = createComponent(slideContainer, 'div')
  
const imageSlide = () => ({
    width: '300px',
    height: '450px',
    padding: '0',
    scrollSnapAlign: 'start',
    flex: '0 0 auto',
    objectFit: 'contain'
})
const ImageSlide = createComponent(imageSlide, 'div')
  
const MobileImageCarousel = ({images}) => {
    const arraySize = images.length
    return(
        <SlideContainer>
            {images.map((item, index)=>(<ImageSlide key={`mobile-carousel-product-image-${index}`}><Image src={item.src} style={{width: '300px', height: '450px', objectFit: 'contain', aspectRatio: '2/3'}}/></ImageSlide>))}
        </SlideContainer>
    )
}

export default MobileImageCarousel