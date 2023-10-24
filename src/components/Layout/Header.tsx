import React from 'react';
import './Layout.scss';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
return (
    <header>
        <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "") }>Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/garden" className={({ isActive }) => (isActive ? "active-link" : "") }>El Jardín</NavLink>
            </li>
            <li>
                <NavLink to="/pokedex" className={({ isActive }) => (isActive ? "active-link" : "") }>Pokedex</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "") }>Contacto</NavLink>
            </li>
        </ul>
    </header>
);
};

export default Header;
