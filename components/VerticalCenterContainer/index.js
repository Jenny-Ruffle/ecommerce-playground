import { createComponent } from 'react-fela'

const verticalCenterContainer = () => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 60px)',
    justifyContent: 'center'
})

const VerticalCenterContainer = createComponent(verticalCenterContainer, 'div')

export default VerticalCenterContainer