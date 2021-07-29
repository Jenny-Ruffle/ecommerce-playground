import React, {useState, useEffect} from 'react'
import { createComponent } from 'react-fela'
import { OutlinedHeart } from '../../svg/wishlistSvgs'
import MenuSvg from '../../svg/menuSvg'
import useMobileView from '../../utils/useMobileView'

const navBar = () => ({
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ebebeb',
    display: 'flex',
    margin: 0,
    padding: 0,
    backgroundColor: '#d9e2f3',
    '@media (max-width: 768px)': {
        justifyContent: 'space-between'
    }
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
    padding: '20px 40px 20px 60px',
    font: '16px/20px Overpass, sans-serif',
    letterSpacing: '3px',
    ':hover': {
        cursor:'pointer',
        color: 'gray'
    },
    '@media (max-width: 768px)': {
        padding: '20px 30px 20px 40px',
    }
})

const HomeLink = createComponent(homeLink, 'a', ['onClick', 'href'])

    
const navLink = ({borderLeft, customPadding, customPaddingMobile}) => ({
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    margin: '20px 0',
    padding: customPadding || '0 16px',
    font: '14px/20px Overpass, sans-serif',
    borderLeft,
    ':hover': {
        cursor:'pointer',
        color: 'gray'
    },
    '@media (max-width: 768px)': {
        font: '16px/24px Overpass, sans-serif',
        padding: customPaddingMobile || '0 16px',
        margin: '20px 0',
    }
})

const NavLink = createComponent(navLink, 'a', ['onClick', 'href'])

const svgContainer = () => ({
    marginTop: '20px',
    padding: '0 16px 0 60px',
    width: '20px',
    height: '20px',
    borderLeft: '1px solid black',
    '@media (max-width: 768px)': {
        padding: '0'
    }
})

const SvgContainer = createComponent(svgContainer, 'div')

const dropdownMenu = () => ({
    backgroundColor:'white',
    width: '100%',
    height: '100vh',
})

const DropdownMenu = createComponent(dropdownMenu, 'div')


const Navigation = () => {
    const mobileView = useMobileView()
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {menuOpen ? setMenuOpen(false): setMenuOpen(true)}
    return (<>
        <NavBar>
            <NavItem><HomeLink href="/product-listing">BRAND NAME</HomeLink></NavItem>
            {!mobileView && <><NavItem><NavLink href="/product-listing">Product Listing</NavLink></NavItem>
            <NavItem><NavLink customPadding='0 60px 0 16px' customPaddingMobile='0 40px 0 16px' href="/product-details">Product Details</NavLink></NavItem>
            <NavItem><SvgContainer><OutlinedHeart href="/wishlist"/></SvgContainer></NavItem>
            <NavItem><NavLink href="/cart">View Cart</NavLink></NavItem></>}
            {mobileView && <NavItem><NavLink><MenuSvg onClick={toggleMenu}/></NavLink></NavItem>}
        </NavBar>
        {menuOpen && <DropdownMenu menuOpen={menuOpen}>
            <NavItem><NavLink href="/product-listing">Product Listing</NavLink></NavItem>
            <NavItem><NavLink href="/product-details">Product Details</NavLink></NavItem>
            <NavItem><NavLink href="/wishlist">View Wishlist</NavLink></NavItem>
            <NavItem><NavLink href="/cart">View Cart</NavLink></NavItem>
            </DropdownMenu>
        }
    </>
    )
}

export default Navigation