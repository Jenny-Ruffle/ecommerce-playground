import { createComponent } from 'react-fela'

const svgContainer = () => ({
    marginBottom: '16px',
    cursor: 'pointer'
})
  
const SvgContainer = createComponent(svgContainer, 'div', ['onClick'])
 

const MenuSvg = ({onClick}) => (
    <SvgContainer onClick={onClick}>
        <svg height = "16pt" viewBox = "0 -53 384 384" width = "16pt" xmlns = "http://www.w3.org/2000/svg"> 
        <path d = "m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/> 
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/> 
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
        </svg>
    </SvgContainer>
)

export default MenuSvg