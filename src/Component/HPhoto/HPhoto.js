import React from 'react';
import photo from "../../images/photo.JPG";
import "./HPhoto.css";

const HPhoto = () => {
    return (
        <div className="Hphoto">
            <img src={photo} alt=""/>
        </div>
    );
};

export default HPhoto;