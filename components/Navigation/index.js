import React from 'react'
import { createComponent } from 'react-fela'

const navBar = () => ({
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ebebeb',
    display: 'flex',
    margin: '0'
})

const NavBar = createComponent(navBar, 'ul')


const navItem = () => ({
    display: 'inline',
})
  
const NavItem = createComponent(navItem, 'li')


const homeLink = () => ({
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    padding: '20px 40px 20px 40px',
    font: '16px/20px Overpass, sans-serif',
    letterSpacing: '3px',
    ':hover': {
        cursor:'pointer',
        color: 'gray'
    }
})

const HomeLink = createComponent(homeLink, 'a', ['onClick', 'href'])

    
const navLink = () => ({
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    padding: '20px',
    font: '14px/20px Overpass, sans-serif',
    ':hover': {
        cursor:'pointer',
        color: 'gray'
    }
})

const NavLink = createComponent(navLink, 'a', ['onClick', 'href'])


const Navigation = () => {
    return (
        <NavBar>
            <NavItem><HomeLink href="/">BRAND NAME</HomeLink></NavItem>
            <NavItem><NavLink href="/product-listing">Product Listing</NavLink></NavItem>
            <NavItem><NavLink href="/product-details">Product Details</NavLink></NavItem>
        </NavBar>
    )
}

export default Navigation