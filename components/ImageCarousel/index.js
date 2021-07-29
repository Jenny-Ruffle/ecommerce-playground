import { createComponent } from 'react-fela'

const slideContainer = () => ({
    scrollSnapType: 'y proximity',
    position: 'relative',
    overflow: 'scroll',
    height: '100vh'
})
  
const SlideContainer = createComponent(slideContainer, 'div')
  
const imageSlide = () => ({
    width: '100%',
    height: '100vh',
    padding: '0 ',
    scrollSnapAlign: 'start'
})
const ImageSlide = createComponent(imageSlide, 'div')
  
const image = () => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
})
const Image = createComponent(image, 'img', ['src'])
  

const ImageCarousel = ({images}) => {
    return(
        <SlideContainer>
            {images.map((item, index)=>(<ImageSlide key={index}><Image src={item.src}/></ImageSlide>))}
        </SlideContainer>
    )
}

export default ImageCarousel