import React from 'react';
import "./Contact.css";
import facebook from "../../images/facebook.png";
import linked from "../../images/linked .png";

const Contact = () => {
    return (
        <div className="contact">
           <div className="touch">
           <h2> <span className="stylist"> Address:</span> 11/A, Chankharpul, Dhaka.</h2>
            <h2> <span className="stylist"> Mobile:</span>  01719 390876</h2>
            <h2> <span className="stylist"> Email: </span>  saiful.riyaz@gmail.com</h2>
           </div>

           <div className="socialMedia">
               <a href="https://www.facebook.com/saiful.riyaz/"><img src={facebook} alt=""/></a>
               <a href="https://www.linkedin.com/in/saiful-riyaz-2a2931144/"><img src={linked} alt=""/></a>
           </div>

        </div>
    );
};

export default Contact;