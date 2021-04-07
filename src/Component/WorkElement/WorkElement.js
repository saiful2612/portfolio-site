import React from 'react';
import "./WorkElement.css";
import school from "../../images/school.jpg";
import shop from "../../images/shop.jpg";

const WorkElement = () => {
    return (
        <div >
            <h1 className="headings">Work Experience</h1>
            <div className="workExperience">
                <div className="Ecommerce">
                    <h1 className="headings">E-commerse page</h1>
                    <img src={shop} alt=""/>
                </div>

                <div className="Eschool">
                    <h1 className="headings" >Online School</h1>
                    <img src={school} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default WorkElement;