import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ContactUs from './components/contact us/ContactUs';
import Footer from './components/footer/Footer';
import Calculator from './components/home/Calculator';

export default function App() {
    return (
        <div className='body-main'>
            <Navbar />

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about-us' element={<ContactUs />} />
                <Route path='/calculator' element={<Calculator />} />

            </Routes>

            <Footer />
        </div>
    )
}
