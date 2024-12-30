import React, { useState, useEffect } from 'react';
import PosterCSS from '../css/Poster.module.css'; // CSS file for styling
import Land from './Land';
import Trainingimg from './Trainingimg';
import About from './About';
import Project from './Project';
import Addition from './Addition';
import Training from './Training';
import Footer from './Footer';

const Poster = () => {
    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    // Simulate loading time for demonstration purposes
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // After 2 seconds, hide the loader
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

 

    if (isLoading) {
        // Show loader when the page is still loading
        return (
            <div className={PosterCSS.loaderContainer}>
                <div className={PosterCSS.loader}></div>
                <p className={PosterCSS.loadingText}>Loading, please wait...</p>
            </div>
        );
    }

    // Once the loading is done, show the actual content
    return (
        <div>
           <Land />
           <div className={PosterCSS.sectionabout}><Trainingimg /></div>
           <About />
           <Project />
           <Addition />
           <Training />
           <Footer />

           
        </div>
    );
};

export default Poster;
