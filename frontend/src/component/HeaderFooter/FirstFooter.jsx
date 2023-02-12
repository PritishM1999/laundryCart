import React from 'react'
import { FaCopyright, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import "./FirstFooter.css";
const Footer = () => {
    return (
        <>
            <div>
                <div className='refer'>
                    <h2>Now Refer & Earn ₹500 for every referral*</h2>
                    <p>* Terms and conditions will be applied</p>
                </div>
                <div className='info-container'>
                    <h3 id="about">ABOUT US</h3>
                    <p id="doorstep">Doorstep Wash & Dryclean Service</p>

                    <h4 id="home">Home</h4>
                    <p id="signin">Sign In</p>
                    <p id="regi">Register</p>


                    <h4 id="pricing">Pricing</h4>


                    <h4 id="career">Career</h4>
                    <p id="blog">Blogs</p>
                    <p id="create">Create</p>


                    <h4 id="contact">Contact</h4>


                    <h3 id="smedia">SOCIAL MEDIA</h3>
                    <div className="icns"><FaFacebookSquare /> <RiInstagramFill /> <ImLinkedin /></div>
                </div>
            </div>
            <footer>
                <div>
                    2023 <FaCopyright /> Laundry
                </div>
            </footer>
        </>
    )
}

export default Footer;