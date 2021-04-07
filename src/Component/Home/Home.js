import React from 'react';
import Hdetails from '../Hdetails/Hdetails';
import HPhoto from '../HPhoto/HPhoto';
import "./Home.css"

const Home = () => {
    return (
        <div class="home">
            <div className="photo-area">
                <HPhoto></HPhoto>
            </div>

            <div className="info-area">
                <Hdetails></Hdetails>
            </div>

        </div>
    );
};

export default Home;