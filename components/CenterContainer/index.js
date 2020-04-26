import { createComponent } from 'react-fela'

const centerContainer = () => ({
    display: 'flex',
    justifyContent: 'center'
})

const CenterContainer = createComponent(centerContainer, 'div')

export default CenterContainer