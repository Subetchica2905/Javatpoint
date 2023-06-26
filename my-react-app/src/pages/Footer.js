import React from 'react';


import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
<center><br></br>
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
    );
};
export default Footer;