/**
 * Main page for routing and applying global styling
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../css/App.css';
import Header from './header';
import PhotoGallery from './gallery';
import MeetTheArtist from './meetTheArtist.js';
import CommissionRequest from './commision';
import ContactUs from './contact.js'
import LoadingOverlay from './loader.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for page load-in for 3 secs
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <Router>
      <div className="App">
        {/* Show loading overlay */}
        {loading && <LoadingOverlay />}    
        <Header />
        
        {/* Routing */}
        <Routes>
          {/* Home/Default */}
          <Route path="/paperSora" element={<PhotoGallery />} />

          {/* Commission Request */}
          <Route path="/paperSora/commission" element={<CommissionRequest />} />

          {/* Portfolio/Gallery */}
          <Route path="/paperSora/portfolio" element={<PhotoGallery />} />
    
          {/* Meet the Artists */}
          <Route path="/paperSora/meettheartist" element={<MeetTheArtist />} />

          {/* Contact Page */}
          <Route path="/paperSora/contact" element=
          {<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;