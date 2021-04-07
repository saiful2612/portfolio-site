import React from 'react';
import AboutExpertise from '../AboutExpertise/AboutExpertise';
import AboutInfo from '../AboutInfo/AboutInfo';
import "./About.css";



const About = () => {
    return (
        <div className="Wall">
            <div>
                <AboutInfo></AboutInfo>
            </div>

            <div>
                <AboutExpertise></AboutExpertise>
            </div>
        </div>
    );
};

export default About;