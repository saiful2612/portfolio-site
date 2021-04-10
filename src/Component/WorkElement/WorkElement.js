import React from 'react';
import "./WorkElement.css";
import school from "../../images/online.png";
import shop from "../../images/ebusiness.jpg";
import Github from "../../images/Github.jpg" 

const WorkElement = () => {
    return (
        <div className="Wheading">
            <h1 >Work Experience</h1>
            <div className="workExperience">
                <div className="Ecommerce">
                    <h3>E-commerce site</h3>
                    <a target="_blank" href="https://youthful-boyd-ccc2e2.netlify.app/shop"><img src={shop} alt=""/></a>
                    </div>

                <div className="Eschool">
                    <h3>Online Education</h3>
                    <a target="_blank" href="https://friendly-noyce-7ba506.netlify.app"><img src={school} alt=""/></a>
                </div>

                <div className="github">
                    <h3>Git Hub </h3>
                    <a target="_blank" href="https://github.com/saiful2612"> <img src={Github} alt=""/></a>
                    
                </div>
            </div>
        </div>
    );
};

export default WorkElement;