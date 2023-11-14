import React, { useState } from 'react';
import './_Navbar.scss';
import { NavLink } from 'react-router-dom';
import {default as menu} from '../../assets/icons/Menu.svg'
import {default as cross} from '../../assets/icons/Cross.svg'
import {default as logo} from '../../assets/icons/Main_Logo.svg'

const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [changeIconMenu, setChangeIconMenu] = useState(true)
    const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
    const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }
    //const toggleLanguage = () => { setLanguage(language === 'es' ? 'en' : 'es'); };
    //const { language, setLanguage, translations } = useLanguage();
return (
    <header>
        <div className='main-logo'>
            <img src={logo}/>
        </div>
        <nav className='navbar'>
            <div className="menu-icon" onClick={() => { handleShowNavbar(); handleChangeIconMenu();}}>
                {
                    changeIconMenu? <img src={menu}></img>: <img src={cross}></img>
                }
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/" className={({ isActive }) => (isActive ? "active-link" : "") }>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/garden" className={({ isActive }) => (isActive ? "active-link" : "") }>El Jardín</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/pokedex" className={({ isActive }) => (isActive ? "active-link" : "") }>Pokedex</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/contact" className={({ isActive }) => (isActive ? "active-link" : "") }>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);
};

export default Navbar;