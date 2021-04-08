import React from 'react';
import Hdetails from '../Hdetails/Hdetails';
import HPhoto from '../HPhoto/HPhoto';
import "./Home.css"

const Home = () => {
    return (
        <div className="homeWall">
            <div className="home">
                <div className="photo-area">
                    <HPhoto></HPhoto>
                </div>

                <div className="info-area">
                    <Hdetails></Hdetails>
                </div>
            </div>
            

        </div>
    );
};

export default Home;