import { createComponent } from 'react-fela'

const column = () => ({
    width: '50%',
    position: 'sticky',
    padding: '10px',
    height: 'max-content',
    top: 0
})

const Column = createComponent(column, 'div')

const columnsWrapper = () => ({
    display:'flex',
    position: 'relative',
})

const ColumnsWrapper = createComponent(columnsWrapper, 'div')

const StickyColumns = ({children}) => <ColumnsWrapper>{children.map((item, index)=> <Column key={index + 1}>{item}</Column>)}</ColumnsWrapper>

export default StickyColumns