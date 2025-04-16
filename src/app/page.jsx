'use client';
import Sidenav from "./components/Sidenav"
import Hero from "./components/Hero"
import Services from "./components/Services";
import Benefits from "./components/Benefits"
import BenefitsThree from "./components/BenefitsThree"
import News from "./components/News";
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { useState, useEffect } from 'react';

const Home = () => {
    // Handle the back to top button 
    const [showButton, setShowButton] = useState(false);

    // Handle the sideNav state
    const [sideNav, setSideNav] = useState(false)


    // This useEffect displays the back to top button when window is above 300
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full relative bg-white">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <Sidenav sideNav={sideNav} setSideNav={setSideNav} />
            <Hero sideNav={sideNav} setSideNav={setSideNav} />
            <Services />
            <Benefits />
            <BenefitsThree />
            <News />
            <CTA />
            <Footer />

            <div
                className={`fixed ${showButton ? 'flex' : 'hidden'} justify-center hover:bottom-12 duration-300 items-center text-white w-12 bottom-10 right-10 h-12 bg-blue-600 p-5 rounded shadow-xl cursor-pointer hover:bg-blue-700 transition-all`}
                onClick={scrollToTop}
            >
                <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Home;