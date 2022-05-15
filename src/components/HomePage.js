import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";


export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer />
    </div>
  );
}
