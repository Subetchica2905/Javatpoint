import './contact.css';
import React,{useState}from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Contact =() =>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[message,setMessage]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !message) {
          console.log(alert('Please fill in all fields'));
          return;
        }
        else(alert("Submitted successfullly"));
        
      
      };
     
    
      return (
        <>
        <div class="bg2">  
        <div className="container">
        <form onSubmit={handleSubmit}>
            <br></br><br></br>
           <center><label for="email">Name </label></center> 
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br></br>
           <center><label for="email" >Email </label></center> 
          <input
            type="email"
            placeholder="Your Email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
           <center><label for="email">Mobile number </label></center> 
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /><br></br>
           <center><label for="email">Any message? </label></center> 
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea><br></br>
          <button type="submit">Submit</button><br></br>
          
        </form>
        </div>
       
        <center><br></br><br></br>
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
    </div>
        </> 
      );
    /*return<h1><center>
        <img src="contact.jpg"
    width="500"
    alt="Logo"></img>
    </center>
    </h1>;*/
};

export default Contact;