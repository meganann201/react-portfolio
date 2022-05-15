import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 pt-5 offset-md-1">
          <h5 className="font highlight">Hi, my name is</h5>
          <h1 className="bold">Megan Campbell.</h1>
          <h5>Full Stack Software Engineer</h5>
          <a href='mailto: megancampbell201@gmail.com'><button type="button" className="button">
          Contact Me!
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
