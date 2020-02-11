import React from 'react'
import {Link} from 'react-router-dom'
import { Auth } from 'aws-amplify';
import './header.style.scss'

const Header = () => {

    
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>My Requests</Link>
                <Link className='option' to='/shop'>Services</Link>
                <Link className='option' to='/' onClick={() => 
                    Auth.signOut()
                    .then(data => console.log(data))
                    .catch(err => console.log(err))}>Sign Out
                </Link>
            </div>
        </div>
    )
}

export default Header;