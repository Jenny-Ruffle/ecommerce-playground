import { createComponent } from 'react-fela'

const slideContainer = () => ({
    scrollSnapType: 'x mandatory',
    position: 'relative',
    overflowX: 'auto',
    flexWrap: 'nowrap',
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    '::-webkit-scrollbar': { display: 'none' },

})
  
const SlideContainer = createComponent(slideContainer, 'div')
  
const imageSlide = () => ({
    width: '50vw',
    padding: '0',
    scrollSnapAlign: 'start',
    flex: '0 0 auto'

})
const ImageSlide = createComponent(imageSlide, 'div')
  
const image = () => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
})
const Image = createComponent(image, 'img', ['src'])
  

const MobileImageCarousel = ({images}) => {
    const arraySize = images.length
    return(
        <SlideContainer>
            {images.map((item, index)=>(<ImageSlide key={index}><Image src={item.src}/></ImageSlide>))}
        </SlideContainer>
    )
}

export default MobileImageCarousel