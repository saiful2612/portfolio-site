import React from 'react';
import "./WorkElement.css";
import school from "../../images/school.jpg";
import shop from "../../images/shop.jpg";
import Github from "../../images/Github.jpg" 

const WorkElement = () => {
    return (
        <div className="Wheading">
            <h1 >Work Experience</h1>
            <div className="workExperience">
                <div className="Ecommerce">
                    <h3>E-commerce site</h3>
                    <img src={shop} alt=""/>
                </div>

                <div className="Eschool">
                    <h3>Online Education</h3>
                    <a href="https://friendly-noyce-7ba506.netlify.app"><img src={school} alt=""/></a>
                </div>

                <div className="github">
                    <h3>Git Hub </h3>
                    <a href="https://github.com/saiful2612"> <img src={Github} alt=""/></a>
                    
                </div>
            </div>
        </div>
    );
};

export default WorkElement;