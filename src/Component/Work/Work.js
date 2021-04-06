import React from 'react';
import school from "../../images/school.jpg";
import shop from "../../images/shop.jpg";
import "./Work.css";

const Work = () => {
    return (
        <div className="work">
            <h1 className="headings">Work</h1>
            <div className="product">
                <div className="box">
                    <img src={school} alt=""/>
                    <h2>Online School</h2>
                </div>
                <div className="box">
                    <img src={shop} alt=""/>
                    <h2>Online Shop</h2>
                </div>
            </div>
        </div>
    );
};

export default Work;