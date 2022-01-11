import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navlinkstyle = ({isActive}) => {
        return{
            fontWeight:isActive?'bold':'normal',
            fontColor:isActive?'red':'black',
            textDecoration:isActive?'none':''
        }
    }

    
    return (
        <nav className='navbar_container'>
            <NavLink style={navlinkstyle} to='/'>Home</NavLink>
            <NavLink style={navlinkstyle} to='/about'>About</NavLink>
        </nav>
    )
}

export default Navbar
