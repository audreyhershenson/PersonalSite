import React from "react";
import "./components_css/Header.css";

const Header = () => {

    return (
        <header id="header">
            <a className="item" href="/">HOME</a>
            <a className="item" href="/about">ABOUT</a>
            <a className="item" href="/portfolio">PORTFOLIO</a>
        </header>
    )
}

export default Header;