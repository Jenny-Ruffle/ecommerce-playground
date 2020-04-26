import { createComponent } from 'react-fela'

const image = ({zIndex}) => ({
    width: '100%',
    objectFit: 'cover',
    zIndex
})

const Image = createComponent(image, 'img', ['src'])
  
export default Image