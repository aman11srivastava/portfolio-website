import React from 'react'
import { Navbar } from '../../constants/Navbar'
import './Nav.css'

const Nav = () => {
    return (
        <nav className = "navbar">
            {Navbar.map((value) => (
                <li className = "nav-links" key = {value.id}>{value.title}</li>
            ))}            
        </nav>
    )
}

export default Nav
