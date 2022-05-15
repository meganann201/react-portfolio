import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Footer() {
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span className="text-muted">© 2022 Megan Campbell</span>
    </div>

    <ul className="nav col-md-3 justify-content-center list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://twitter.com/megan_ann14"><i className="fa fa-twitter highlight fa-lg" aria-hidden="true"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="https://github.com/meganann201"><i className="fa fa-github highlight fa-lg" aria-hidden="true"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/megan-c-a89388100/"><i className="fa fa-linkedin highlight fa-lg" aria-hidden="true"></i></a></li>
    </ul>
  </footer>
</div>
  );
}

export default Footer;