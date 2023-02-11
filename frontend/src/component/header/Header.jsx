import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../header/Header.css"
const Header = () => {
    const navigate = useNavigate()
    const signInClicked = () =>{
        
    }
    return (
        <>
            <nav className='header'>
                <div className='logo'>
                    <span className='l'>L</span>AUNDRY
                </div>
                <div className='menu'>
                    <ul>
                        <li></li>
                        <li>Pricing</li>
                        <li>Career</li>
                        <li className='user'>
                            <div className='profile'></div>
                            <span className='username' >User Name</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header