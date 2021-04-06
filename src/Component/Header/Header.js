import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
                <a href="/interests">Interest</a>
            </nav>
        </div>
    );
};

export default Header;