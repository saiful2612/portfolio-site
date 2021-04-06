import React from 'react';
import "./About.css";
import html from "../../images/html.png";
import css3 from "../../images/css3.png";
import bootstrap from "../../images/bootstrap.png";
import js from "../../images/JS.jpg";
import react from "../../images/react.png";
import firebase from "../../images/firebase.webp";


const About = () => {
    return (
        <div className="Wall">
            <div className="profile">
                <h3 className="headings">ABOUT ME</h3>
                <p>I'm Md. Saiful Islam. I'm self taught Frontend Developer with over 8 month's experience. I can make any web pages and try to make clients supreme satisfaction.</p>
            </div>

            <div className="expertise">
                <h3 className="headings">EXPERTISE</h3>
                <img src={html} alt=""/>
                <img src={css3} alt=""/>
                <img src={bootstrap} alt=""/>
                <img src={js} alt=""/>
                <img src={react} alt=""/>
                <img src={firebase} alt=""/>
                

            </div>
        </div>
    );
};

export default About;