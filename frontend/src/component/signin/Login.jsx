
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstHeader from "../HeaderFooter/FirstHeader";
import FirstFooter from "../HeaderFooter/FirstFooter";
import { FaLock } from "react-icons/fa";
import "./Login.css";


const SignIn = () => {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleRegister = () => {
      navigate("/SignUp");
    };

    const handleSignin = async (event) => {
      event.preventDefault();
      
      console.log(`Submitted: ${value} - ${value}`);  
      console.log(`Submitted: ${value} - ${password}`);

      const res = await fetch("http://localhost:4000/user/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({value , password}),
        })

      const mylogins = await res.json();
      // console.log(mylogins.token);
      // console.log(mylogins.existingUser);
      console.log(mylogins.message);
      console.log(mylogins.status);

      if(mylogins.message === "Invalid details"){
         alert("Invalid details")
      }
      else if(mylogins.status === "Failed"){
        alert("Check your details");
      }

      else{
        localStorage.setItem('user', JSON.stringify({token:mylogins.token, user:mylogins.existingUser}))
        console.log(JSON.parse(localStorage.getItem("user")).user?._id);
  
        navigate('/pastOrder')
      }

    }
    
    const handleChange = (event) => {
      if (event.target.type === 'text') {
        setValue(event.target.value);
      } else if (event.target.type === 'password') {
        setPassword(event.target.value);
      }
    };

    
    
  return (
    <div>
      <FirstHeader/>
      <div className="container2">
        <div className="regdiv">
          <h1>Laundary Service</h1>
          <h3>Doorstep Wash & Dryclean Service</h3>
          <p>Don't Have An Account?</p>
          <button onClick={handleRegister}>Register</button>
        </div>

        <div className="sindiv">
          <h1>SIGN IN</h1>

          <form>

            <input id="inp1" 
              type="text" placeholder="Mobile / Email"
              value={value}
              onChange={handleChange}
              required
            />
            <div className="input-icon">
              {/* <i id="locki"><FaLock/></i> */}
              <input id="inp2" 
               type="password"
               name="password"
               placeholder="Password" 
               value={password}
               onChange={handleChange}
               required
              /> 
              <span><FaLock/></span>
            </div> 
            <h4 id="fpass">Forgot Password?</h4>
            <button type="submit" onClick={handleSignin}>Sign In</button>

            {/* <p>{checkValue(value)}</p> */}
          </form>
          </div>
        </div>
      <FirstFooter />
    </div>
  );
};

export default SignIn;

