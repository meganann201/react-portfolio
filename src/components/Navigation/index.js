import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from '../Home';
import About from '../About';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Navigation({ currentPage, handlePageChange }) {

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default Navigation;