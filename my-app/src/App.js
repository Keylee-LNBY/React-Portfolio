import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="m12">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
};

}

export default App;
