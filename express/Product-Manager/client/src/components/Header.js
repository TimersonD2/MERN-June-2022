import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';


const Header = () => {
    return (
        <header className='header'>
            <h1>Product Manager</h1>
            <NavLink to="/">Home</NavLink>
        </header>
    )
}

export default Header
