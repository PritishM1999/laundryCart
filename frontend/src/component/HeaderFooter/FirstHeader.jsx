import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./FirstHeader.css"
const Header = () => {
    const navigate = useNavigate();
    const SignInClicked = () => {
        console.log(JSON.parse(localStorage.getItem("user")));
        if (JSON.parse(localStorage.getItem("user"))) {
            localStorage.clear()
            navigate('/SignIn')
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
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Career</li>
                        <li className='user'>
                            <div className='s_in' onClick={() => { SignInClicked() }}>

                                {JSON.parse(localStorage.getItem("user")) ? <span>{JSON.parse(localStorage.getItem("user"))?.user?.name}</span> : <span>Sign In</span>}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;