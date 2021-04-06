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
                <a href="/blog">Blog</a>
            </nav>
        </div>
    );
};

export default Header;