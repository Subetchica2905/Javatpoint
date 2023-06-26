
import React, { useState } from"react";
import './login.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Login =() =>{
const [email, setEmail] = useState('');
const [pass,setpass] =useState('');
const [emailerror, setEmailError] = useState("");
const [passError, setPassError] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [showForgotPassword, setShowForgotPassword] = useState(false);
const [forgotEmail, setForgotEmail] = useState('');
const [forgotEmailError, setForgotEmailError] = useState('');
const handleSubmit =(e) =>{
    e.preventDefault();
    if (!emailerror) {
        setEmailError("Email is required");
      } else if (!isValidEmail(emailerror)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
  
      
      if (!passError) {
        setPassError("Password is required");
      } else if (passError.length < 6) {
        setPassError("Password should be at least 6 characters long");
      } else {
        setPassError("");
      }
  
      if (email && pass && isValidEmail(email) && pass.length === 6) {
       
console.log(email);
alert("You have loginned successfully");
      }
      else{
        alert("Enter only 6 characters for password");
      }
     
    };
    const handleForgotPassword = (e) => {
      e.preventDefault();
      setShowForgotPassword(!showForgotPassword);
    };
    const handleForgotPasswordSubmit = (e) => {
      e.preventDefault();
    
      // Perform validation on the forgot email
      if (!forgotEmail) {
        setForgotEmailError("Email is required");
      } else if (!isValidEmail(forgotEmail)) {
        setForgotEmailError("Invalid email address");
      } else {
        setForgotEmailError("");
        // Perform the password reset logic here
        // You can make an API call to your backend to handle the password reset
        // and show appropriate success or error messages to the user
        // Example:
        // resetPassword(forgotEmail)
        //   .then(() => {
        //     alert("Password reset email sent");
        //   })
        //   .catch((error) => {
        //     alert("Failed to reset password: " + error.message);
        //   });
      }
    };
    
    const isValidEmail = (value) => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return(
        <>
        <div class="bg">  
        <div className="Container">
        <form onSubmit={handleSubmit}>
            <br></br><center>
            <label for="email">Email </label>
            <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email"  id="email" name="email"/>
            <br></br><br></br>
            <label for="password">Password</label>
            <div className="password-input">
          
            <input value={pass} onChange={(e) => setpass(e.target.value)} type={showPassword ? "text" : "password"} placeholder="******"   id="password" name="password"/>
            <span
                className={`password-toggle ${showPassword ? "visible" : ""}`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
              </div>
    
            {passError && <span className="error">{passError}</span>}
            <br></br><br></br>
            <button type="submit">Login</button></center><br></br>
            <center><a href="#" onClick={handleForgotPassword}>Forgot Password?</a></center>
            {showForgotPassword && (
  <form onSubmit={handleForgotPasswordSubmit}>
    <br></br>
    <label htmlFor="forgotEmail">Enter your email to reset password:</label>
    <input
      type="email"
      id="forgotEmail"
      name="forgotEmail"
      placeholder="Enter your email"
      value={forgotEmail}
      onChange={(e) => setForgotEmail(e.target.value)}
    />
    {forgotEmailError && <span className="error">{forgotEmailError}</span>}
    <button type="submit">Reset Password</button>
  </form>
)}

<center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/javatpoint/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/javatpoint" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/javatpoint/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        
        <div className="footer-text">
          &copy; {new Date().getFullYear()} JavaTpoint. All rights reserved.
        </div>
        
      </div>
    </footer>
    </center>
   
    
            </form>
            </div>
            </div>
            </>
    )
    /*<h1>
         <center> <img src="login.jpg"
    width="500"
    alt="Logo"></img></center>
    
    </h1>;
    */


};
export default Login;