import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import profileImage from "../../assets/profile-image.jpg";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 pt-5 offset-md-1">
          <p>Hi, I'm Megan! I'm a full stack software engineer. I have a fundamental knowledge of software design and exceptional programming skills. Experience in imroving and updating software performance, as well as developing new software functionalities.</p>
          <p>I'm happiest when I'm learning, solving problems, exploring, and thinking about how to improve current projects. Currently problem solving at <a className="highlight" href="https://upscope.com/">upscope.com</a>. Feel free to reach out and say hello!</p>
          <a href="mailto: megancampbell201@gmail.com"><button className="button text-light">Get In Touch!</button></a>
        </div>
        <div className="col-4 mt-5 pt-5 offset-md-1">
          <img src={profileImage} className="img-fluid" /> 
       </div>
      </div>
    </div>
  );
}

export default About;
