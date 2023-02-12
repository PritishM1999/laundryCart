import React from 'react'
import { useNavigate } from 'react-router-dom'

import user from '../../media/user.png'
import "../header/Header.css"
const Header = () => {
    const navigate = useNavigate()
    const signOutClicked = () =>{
         if(!localStorage.getItem("user")){
            navigate('/')
         }else{
            localStorage.clear();
            navigate("/");
         }
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
                            <div className='profile'><img src={user} alt="Use Image" width="100%" height="100%" style={{"borderRadius":"50%"}}/></div>
                            <span className='username'  onClick={()=> signOutClicked()}>{JSON.parse(localStorage.getItem("user"))?.user?.name}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header