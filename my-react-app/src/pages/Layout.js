import{Link}from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';
const Layout=() =>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <nav>
        <div class="topnav">
            
        
              <Link to="/"  class="nav-link" ><i  class="fa fa-home"></i>Home</Link>
            
            
              <Link to="/Login"  class="nav-link"><i class="fa fa-fw fa-user"></i>Login</Link>
            
            
              <Link to="/Contact"  class="nav-link"><i class="fa fa-envelope"></i>Contact</Link>
            
              <Link to="/About"  class="nav-link"><i class="fa fa-bars"></i>About</Link>
              <div class="topnav-right">
              <a href="https://www.linkedin.com/company/javatpoint/"  target="_blank" rel="noopener noreferrer">

           <FaLinkedin />
          </a>
        
      
    
          </div>
              </div>
              
        </nav>
        {/* <Outlet />*/ }
      </>  
    )
};
export default Layout;