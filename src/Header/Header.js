import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import WhiteLogo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'

/**
* @author
* @function Header
**/

const Header = (props) => {
const date = new Date()
const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

// useEffect(()=>{
//     localStorage.set
// })



    return (
        <div className='header_container'>
            <div id='nav_container'>
                <div className='header_wrapper'>
                    <div className='header_info_container'>
                        <img src={WhiteLogo} alt='logo'></img>
                    </div>
                    <div className='header_info_container nav'>
                        <Link  className='nav_link' to='/'>Dashboard</Link>
                        <Link  className='nav_link' to='/lot-management'>Lot Management</Link>
                        <Link className='nav_link' to='/notifications'>Notification Centre</Link>
                        <Link className='nav_link' to='#'>Profile</Link>
                    </div>
                </div> {/* End of header_wrapper */}
                <div className='header_wrapper bottom_info'> 
                    <div className='changeable_titles'> 
                        <h1 id='title'>{props.title}</h1>
                    </div>
                    <div className='changeable_titles adjustment'> 
                        <h4 id='title'>Halifax Lot: 12088</h4>
                    </div>
                    <div className='changeable_titles adjustment'> 
                        <h4  id='title'>{currentDate}</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header