import React from 'react';
import "./Contact.css";
import facebook from "../../images/facebook.png";
import linked from "../../images/linked .png";

const Contact = () => {
    return (
        <div className="contact">
           <div className="touch">
           <h2>Address: Chankharpul, Dhaka</h2>
            <h2>Mobile : 01719 390876</h2>
            <h2>Email: saiful.riyaz@gmail.com</h2>
           </div>

           <div className="socialMedia">
               <img src={facebook} alt=""/>
               <img src={linked} alt=""/>
           </div>

        </div>
    );
};

export default Contact;