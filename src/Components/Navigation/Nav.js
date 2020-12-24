import React from 'react'
import { Navbar } from '../../constants/Navbar'

const Nav = () => {
    return (
        <nav>
            {Navbar.map((value) => (
                <li key = {value.id}>{value.title}</li>
            ))}            
        </nav>
    )
}

export default Nav
