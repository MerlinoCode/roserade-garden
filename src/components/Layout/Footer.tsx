import { default as reddit } from '../../assets/icons/Social Media/Reddit.svg';
import { default as pinterest } from '../../assets/icons/Social Media/Pinterest.svg';
import { default as youtube } from '../../assets/icons/Social Media/YouTube.svg';
import { default as facebook } from '../../assets/icons/Social Media/Facebook.svg';
import { default as instagram } from '../../assets/icons/Social Media/Instagram.svg';
import { default as tiktok } from '../../assets/icons/Social Media/TikTok.svg';
import { default as twitterx } from '../../assets/icons/Social Media/TwitterX.svg';
import Title from '../Title/Title';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const scrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", 
    });
    }, [pathname]);

    return null;
}

const Footer = () => {
return (
    <footer>
            {/* <p>&copy; {new Date().getFullYear()} Jonathan Leonel Merlino</p> */}
            <div className="div1">
                <Title text="Nuestras redes sociales"/>
                <div className="social-media">
                    <div>
                    <a href='https://www.pinterest.com/' target="_blank" rel="noopener noreferrer"><img src={pinterest}/></a>
                    <a href='https://www.reddit.com/' target="_blank" rel="noopener noreferrer"><img src={reddit}/></a>
                    <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><img src={youtube}/></a>
                    </div>
                    <div>
                    <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><img src={facebook}/></a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><img src={instagram}/></a>
                    <a href='https://www.tiktok.com/' target="_blank" rel="noopener noreferrer"><img src={tiktok}/></a>
                    <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer"><img src={twitterx}/></a>
                    </div>
                </div>
            </div>
            <div className='div2'>
                <Title text="LINKS"/>
                <div className='page-links'>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={scrollToTop} className={({ isActive }) => (isActive ? "active-link" : "") }>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/garden" onClick={scrollToTop} className={({ isActive }) => (isActive ? "active-link" : "") }>El Jardín</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pokedex" onClick={scrollToTop} className={({ isActive }) => (isActive ? "active-link" : "") }>Pokedex</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={scrollToTop} className={({ isActive }) => (isActive ? "active-link" : "") }>Contacto</NavLink>
                            </li>
                        </ul>
                </div>
            </div>
            <div className='div3'>
                <Title text="DIRECCIÓN"/>
                <p className='informative-text'>Av. Lorem Ipsum 4200</p>
                <br/>
                <Title text="TELÉFONO"/>
                <p className='informative-text'>+54 000 9999 9999</p>
            </div>
            <div className='credits'>
                <p>&copy; {new Date().getFullYear()} - Jonathan Leonel Merlino</p>
            </div>
    </footer>
);
};

export default Footer;
