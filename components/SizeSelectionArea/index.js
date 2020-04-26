import React from 'react'
import { createComponent } from 'react-fela'

const styledButton = ({selected}) => ({
    display: 'block',
    position:'relative',
    textAlign: 'center',
    width: '62px',
    height: '36px',
    color: selected ? 'white' : 'black',
    backgroundColor: selected ? 'black':'white',
    padding: '8px 16px',
    font: '14px/20px Overpass, sans-serif',
    border: selected ? '1px solid black' :'1px solid gray',
    borderRadius: '1px',
    margin: '8px',
    ':hover': {
        cursor:'pointer',
        border: selected ? '1px solid black' : '1px solid #adacac',
        backgroundColor: selected ? 'black' : '#fafafa'
    },
    ':focus': {
        outline:'none'
    },
    ':disabled': {
        color: '#adacac',
        border: '1px solid #adacac',
        backgroundColor: '#fafafa',
        ':hover': {
            cursor:'default',
        },
    }
})

const StyledButton = createComponent(styledButton, 'button', ['onClick', 'disabled'])

const outOfStockStyle = () => ({

    position: 'absolute',
    borderBottom: '1px solid #adacac',
    top: '17px',
    left: '-5px',
    width: '70px',
    transform: 'rotate(-29.5deg)'
})

const OutOfStockStyle = createComponent(outOfStockStyle, 'span')

const container = () => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '400px'
})

const Container = createComponent(container, 'div')


const SizeButton = ({ currentSize, setSize, index, size, inStock = true }) => {
    const selectedSize = index === currentSize.key
    return (
        <StyledButton onClick={()=>setSize({key: index, size: size})} selected={selectedSize} disabled={!inStock} >
            {size}
        {!inStock && <OutOfStockStyle/>}
        </StyledButton>
    )
}

const SizeSelectionArea = ({ currentSize, setSize, availableSizes }) => {
    return <Container>
        {availableSizes.map((item, index)=>(<SizeButton currentSize={currentSize} setSize={setSize} index={index} size={item.size} inStock={item.inStock}/>))}
    </Container>
}

export default SizeSelectionArea