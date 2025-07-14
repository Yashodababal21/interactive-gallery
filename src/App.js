// App.js - Main entry component that renders the Image Gallery

import React from 'react';
import './App.css';
import Gallery from './components/Gallery.js';

function App() {
  return (
    <div className="App">
      <h1>Interactive Image Gallery</h1>
      <Gallery />
    </div>
  );
}

export default App;
