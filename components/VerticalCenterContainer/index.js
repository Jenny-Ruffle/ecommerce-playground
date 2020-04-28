import { createComponent } from 'react-fela'

const verticalCenterContainer = () => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 60px)',
    justifyContent: 'center',
    '@media(max-width: 768px)': {
        height: 'max-content',
        marginTop: '16px' 
    }
})

const VerticalCenterContainer = createComponent(verticalCenterContainer, 'div')

export default VerticalCenterContainer