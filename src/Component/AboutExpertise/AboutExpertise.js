import React from 'react';
import "./AboutExpertise.css";
import html from "../../images/html.png";
import css3 from "../../images/css3.png";
import bootstrap from "../../images/bootstrap.png";
import js from "../../images/JS.jpg";
import react from "../../images/react.png";
import firebase from "../../images/firebase.webp";

const AboutExpertise = () => {
    return (
        <div className="expertise">
            <h3 className="headings">EXPERTISE</h3>
            <img src={html} alt=""/>
            <img src={css3} alt=""/>
            <img src={bootstrap} alt=""/>
            <img src={js} alt=""/>
            <img src={react} alt=""/>
            <img src={firebase} alt=""/>
            
        </div>
    );
};

export default AboutExpertise;