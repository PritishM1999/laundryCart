import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FirstHeader from "../HeaderFooter/FirstHeader";
import FirstFooter from "../HeaderFooter/FirstFooter";

import './Register.css';


const SignUp = () => {
  const [formData, setFormData] = useState({name: "", 
    email: "",
    phone: "",
    state: "",
    district: "",
    address: [],
    pincode: "",
    password: "",
  });

  const [error, setError] = useState({name:{isValid: true, message: ""}, email:{isValid: true, message: ""}, phoneNumber:{isValid: true, message: ""}, password:{isValid: true, message: ""}})

  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    
      const ress = await fetch("https://localhost:4000/user/register", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })


      const regUser = await ress.json();

      console.log(ress.message);
      console.log(ress.status);

      if(regUser.status === "Failed"){
        alert("Check your details");
      }
      else if(regUser.message === "User already exists") {
        alert("User already exists");
      }
      else{
        navigate('/');
      }
      
    };

  const backtoSignin = (event) => {
    navigate('/')
  }


    const checkErrors= (type)=> {
      switch(type) {
          case "name":
              //console.log(formData.name)
              // let regex = /^[a-zA-Z0-9\s]*$/;
              if ((formData.name) === false) {
                  setError({ ...error, name: { isValid: false, message: "Name is not alphanumeric" } });
              } else {
                  setError({...error, name:{isValid: true, message: ""}})
              }
              break;
          case "email": 
              //console.log(formData.email)   
              if(!formData.email.includes("@")) {
                  setError({...error, email:{isValid: false, message: "email must have @ in before domain"}})
              } else {
                  setError({...error, email:{isValid: true, message: ""}})
              }

              break;
          case "phoneNumber":
              let ph = /^[0-9\s]*$/;
              //console.log(formData.phoneNumber)
              if (ph.test(formData.phoneNumber) === false) {
                  setError({...error, phoneNumber:{ isValid: false, message: "Phone Number should be number only"}})
              } else {
                  setError({...error, phoneNumber:{isValid: true, message: ""}})
              }
              break;
          case "password":
              //console.log(formData.password)
              if(formData.password.length > 16 || formData.password.length < 6 ) {
                  setError({...error, password:{isValid: false, message: "Password must contain atleast 6 letters"}})
              } else {
                  setError({...error, password:{isValid: true, message: ""}})
              }
              break;
          default: return "User registered sucessfully"
      }
  }
  // const isSubmitValid = formData.name.length && formData.email.length && formData.phoneNumber.length && formData.password.length;

  return (
    <div>
    <FirstHeader/>
    <div className='section-div'>
      <div className='signin-div'>         
        <div className="reg-div">
          <h1>Laundary Service</h1>
          <h3>Doorstep Wash & Dryclean Service</h3>
          <p>Already Have Account</p>
          <button type="submit" onClick={backtoSignin}>Sign In</button>
          </div>      
      </div>
      <div className='form-div'>
      <h1>REGISTER</h1>
          <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(event)=>{setFormData({...formData, name: event.target.value})}}
            onBlur={() => checkErrors("name")}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event)=>{setFormData({...formData, email: event.target.value})}}
            onBlur={() => checkErrors("email")}
            
          />
          <br/>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(event)=>{setFormData({...formData, phone: event.target.value})}}
            onBlur={() => checkErrors("phone")}
          />
          <input
            id="state"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(event)=>{setFormData({...formData, state: event.target.value})}}
            onBlur={() => checkErrors("state")}
          />
          <br/>
          <input
            id="district"
            type="text"
            placeholder="District"
            value={formData.district}
            onChange={(event)=>{setFormData({...formData, district: event.target.value})}}
            onBlur={() => checkErrors("district")}
          />
          <input
            id="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(event)=>{setFormData({...formData, address: event.target.value})}}
            onBlur={() => checkErrors("address")}
          />
          <br/>
          <input
            id="pincode"
            type="text"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(event)=>{setFormData({...formData, pincode: event.target.value})}}
            onBlur={() => checkErrors("pincode")}
          />
          <input
            id="paswd"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(event)=>{setFormData({...formData, password: event.target.value})}}
            onBlur={() => checkErrors("psswd")}
          />
          <br/>
          <input id="check" type="checkbox"/>
          <span id="checkspan">I agree to Terms & Condition receiving marketing and promotional materials</span>
          <button id="mysubmit-form" type="submit" onClick={handleSubmit}>Submit</button>
        
        </form>
      </div>
    </div>
    <FirstFooter/>
    </div>
  );
};

export default SignUp;


