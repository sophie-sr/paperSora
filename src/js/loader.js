/**
 * Loader for smooth initial load of page
 */

import React from 'react';
import '../css/loader.css';

const LoadingOverlay = () => {
  // Bouncing ball overlay
  return (
    <div className="loading-overlay">
      <div className="bouncing-ball"></div>
      <div className="bouncing-ball"></div>
      <div className="bouncing-ball"></div>
    </div>
  );
};

export default LoadingOverlay;