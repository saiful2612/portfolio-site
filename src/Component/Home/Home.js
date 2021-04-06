import React from 'react';
import photo from "../../images/photo.JPG";
import "./Home.css"

const Home = () => {
    return (
        <div class="home">
            <div className="one">
                <img src={photo} alt=""/>
            </div>

            <div className="two">
                <h1> MD. SAIFUL ISLAM</h1>
                <h4>I am a frontend Developer</h4>
            </div>

        </div>
    );
};

export default Home;