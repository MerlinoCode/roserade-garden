import React from 'react';
import './Layout.scss';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
return (
    <header>
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
    </header>
);
};

export default Header;
