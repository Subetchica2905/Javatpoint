import React, { useState } from "react";
import './about.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const About =() =>{
    const [showForm, setShowForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCourseSelection = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   alert("Submitted successfully");
   
    console.log("Selected Course:", selectedCourse);
  };




    return(
    <>
    
    <hr class="hrhomebox" />
     <fieldset class="grayy">
     <div class="bgabout">
    <h1 class="h4"> Summer special coaching</h1>
    <br></br>
    <h1> <img src="about.jpg"
    width="400"
    alt="Logo"></img>
    <img src="about2.jpg"
    width="400"
    alt="Logo"></img>
    <img src="datascience learning.png"
    width="400"
    alt="Logo"></img>
    
    </h1>;
    
 
    </div>
<br></br>
    </fieldset>
    
    <hr class="hrhomebox" />
     <fieldset class="gray7">
    <div class="bg3">  
    <h1 class="h5"> Language Tutorials With Videos</h1>
 <center>
    <div class="aboutcontent">
 <div class="html">
   <a href="https://www.javatpoint.com/html-tutorial">
    
  
    <p>Html Tutorial</p>
    </a>
  
    <div class="video-responsive2">
        
<iframe title="htmlvideo"width="300" height="200" src="https://www.youtube.com/embed/JHq3pL4cdy4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

<div class="python">
    <a href="https://www.javatpoint.com/python-tutorial">
    <p> Python Tutorial</p>
    </a>
    
    <div class="video-responsive3">
<iframe title="pythonvideo"width="300" height="200" src="https://www.youtube.com/embed/41qgdwd3zAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<div class="javascript">
    <a href="https://www.javatpoint.com/javascript-tutorial">
    <p> Javascript Tutorial</p>
    </a>
    
    <div class="video-responsive4">
<iframe title="javascriptvideo" width="300" height="200" src="https://www.youtube.com/embed/uDwSnnhl1Ng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<div class="C">
    <a href="https://www.javatpoint.com/c-programming-language-tutorial">
    <p> C Programming Tutorial</p>
    </a>
    
    <div class="video-responsive5">
<iframe title="cvideo"width="300" height="200" src="https://www.youtube.com/embed/si-KFFOW2gw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

</div>

    </center>
<br></br><br></br>
   <center>
    <div class="aboutcontent2">
    <div class="aptitude">
    <a href="https://www.javatpoint.com/aptitude/quantitative">
    <p>Aptitude Tutorial</p>
    </a>
  
    <div class="video-responsive6">
<iframe title="aptivideo"width="300" height="200" src="https://www.youtube.com/embed/tnc9ojITRg4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<div class="ds">
    <a href="https://www.javatpoint.com/data-structure-tutorial">
    <p>Datastructure Tutorial</p>
    </a>
   
    <div class="video-responsive7">
<iframe title="dsvideo"width="300" height="200" src="https://www.youtube.com/embed/s2mYsPWzLjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<div class="reasoning">
    <a href="https://www.javatpoint.com/reasoning">
    <p>Reasoning Tutorial</p>
    </a>
    <div class="video-responsive8">
<iframe title="reasoningvideo"width="300" height="200" src="https://www.youtube.com/embed/wwN3mJ-b4FY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

<div class="interview">
    <a href="https://www.javatpoint.com/interview-questions-and-answers">
    <p>Interview Questions Tutorial</p>
    </a>

    <div class="video-responsive9">
<iframe title="interviewvideo"width="300" height="200" src="https://www.youtube.com/embed/cl9-_xVQ800" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
    </div>
    </center>
    </div>
 
   </fieldset>
   <br></br><br></br> <div class="bgreg">
   <hr class="hrhomebox" />
     <fieldset class="gray8">
     
        
        <center><h1 class="hhh">To register for any courses <br></br>Click👇</h1></center>
    {/* Registration form */}
   {!showForm ? (
        <center>
          <button onClick={handleButtonClick}>Register now</button>
        </center>
      ) : (
        <div className="form-box">
        
        <form onSubmit={handleSubmit}>
          {/* Add your registration form fields here */}
          <h2 class="hh">Registration Form</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" /><br /><br />
         
          <p>Select a course:</p>
         
          <label class="html"> HTML
            <input
              type="radio"
              id="course-html"
              name="course"
              value="HTML"
              checked={selectedCourse === "HTML"}
              onChange={handleCourseSelection}
            />
            </label>
          <label> Python
            <input
              type="radio"
              id="course-python"
              name="course"
              value="Python"
              checked={selectedCourse === "Python"}
              onChange={handleCourseSelection}
            />
           
          </label>

          <label>  JavaScript
            <input
              type="radio"
              id="course-javascript"
              name="course"
              value="JavaScript"
              checked={selectedCourse === "JavaScript"}
              onChange={handleCourseSelection}
            />
          
          </label>
          
          <label>  C Programming
            <input 
              type="radio"
              id="course-c program"
              name="course"
              value="C Programming"
              checked={selectedCourse === "C Programming"}
              onChange={handleCourseSelection}
            />
          
          </label>
          <label>  Data Structure
            <input 
              type="radio"
              id="course-datastructure"
              name="course"
              value="Data Structure"
              checked={selectedCourse === "Data Structure"}
              onChange={handleCourseSelection}
            />
          
          </label>
          <label> Aptitude
          <input 
              type="radio"
              id="course-aptitude"
              name="course"
              value="Aptitude"
              checked={selectedCourse === "Aptitude"}
              onChange={handleCourseSelection}
            />
          
          </label>
        

          <br /><br />
          <input type="submit" value="Submit" />
       
        </form>
        </div>
      )}
          </fieldset>
          <hr class="hrhomebox" />
     <fieldset class="gray9">
     
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
    </fieldset>
      </div>
    
    </>);
  
};
export default About;