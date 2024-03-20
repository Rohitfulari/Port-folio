import { Link } from "react-router-dom"
import "./Navbar.css"

import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []); // [] ensures that this effect runs only once after initial render

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div className="ham" onClick={handleClick}>
                {click ? (
                    <CloseIcon style={{ color: "#fff", fontSize: "2rem" }} />
                ) : (
                    <MenuIcon style={{ color: "#fff", fontSize: "2rem" }} />
                )}
            </div>
        </div>
    );
}

export default Navbar;
