// LoadingOverlay.js
import React from 'react';
import './loader.css';  // Import CSS for styling

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="bouncing-ball"></div>
      <div className="bouncing-ball"></div>
      <div className="bouncing-ball"></div>
    </div>
  );
};

export default LoadingOverlay;