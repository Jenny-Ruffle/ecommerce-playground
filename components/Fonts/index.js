import { createComponent } from 'react-fela'

const headingLarge = () => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '36px/40px PlayfairDisplay, sans-serif'
})

export const HeadingLarge = createComponent(headingLarge, 'h1')

const headingMedium = () => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '22px/26px PlayfairDisplay, sans-serif'
})

export const HeadingMedium = createComponent(headingMedium, 'h2')

const paragraphLarge = () => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '14px/18px Overpass-Light, sans-serif'
})

export const ParagraphLarge = createComponent(paragraphLarge, 'p')

const paragraph = () => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '12px/16px Overpass-Light, sans-serif'
})

export const Paragraph = createComponent(paragraph, 'p')


const prefix = () => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    font: '10px/14px Overpass-Light, sans-serif'
})

export const Prefix = createComponent(prefix, 'p')
