import React from 'react';
import school from "../../images/school.jpg";
import shop from "../../images/shop.jpg";
import WorkElement from '../WorkElement/WorkElement';
import "./Work.css";

const Work = () => {
    return (
        <div className="work">
            <h1 className="headings">Work</h1>
            <WorkElement></WorkElement>
        </div>
    );
};

export default Work;