import React from 'react.js';
import Navbar from '../components/navbar';
import About from '../components/About';
import Cards from '../components/Cards';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <About />
            <Cards />
            <Footer />
        </>
    );
};

export default HomePage;