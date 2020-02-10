import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'

const Header = () => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>My Requests</Link>
                <Link className='option' to='/shop'>Services</Link>
            </div>
        </div>
    )
}

export default Header;