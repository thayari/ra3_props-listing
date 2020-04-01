import React from 'react';
import './App.css';
import data from './data/etsy.json'
import Listing from './components/Listing'

function App() {
  const items = data;
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
