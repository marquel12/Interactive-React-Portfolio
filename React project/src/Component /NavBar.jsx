
import React from 'react';
import { NavLink} from 'react-router-dom';
// get Nav.css style from 



const NavBar = () => {
    return (
        <nav>

            <ul>
                <li>
                    <NavLink to="/About">About </NavLink>
                </li>
                <li>
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Resume">Resume</NavLink>
                </li>

            </ul>
        </nav>
    )
}


export default NavBar 
