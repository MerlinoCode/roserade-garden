import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
return (
    <nav>
        <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "") }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/pokedex" className={({ isActive }) => (isActive ? "active-link" : "") }>Pokedex</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "") }>About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "") }>Contact</NavLink>
            </li>
        </ul>
    </nav>
);
};

export default Navbar;
