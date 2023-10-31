import { default as googlePlus } from '../../assets/icons/Social Media/Google Plus Circled.svg';
import { default as pinterest } from '../../assets/icons/Social Media/Pinterest.svg';
import { default as youtube } from '../../assets/icons/Social Media/YouTube.svg';
import { default as facebook } from '../../assets/icons/Social Media/Facebook.svg';
import { default as instagram } from '../../assets/icons/Social Media/Instagram.svg';
import { default as tiktok } from '../../assets/icons/Social Media/TikTok.svg';
import { default as twitterx } from '../../assets/icons/Social Media/TwitterX.svg';
import Title from '../Title/Title';

const Footer = () => {
return (
    <footer>
            {/* <p>&copy; {new Date().getFullYear()} Jonathan Leonel Merlino</p> */}
            <div className="div1">
                <p>Planifique su visita hoy mismo y experimente la tranquilidad y la belleza que sólo un jardín como el nuestro puede ofrecer. Ven a explorar el mundo de la flora y deje que la magia de la naturaleza le inspire.</p>
                <img className='roserade-sprite' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/407.png"/>
                <h4>¡Seguinos en nuestras redes sociales!</h4>
                <div className="social-media">
                    <div>
                        <img src={googlePlus}/>
                        <img src={pinterest}/>
                        <img src={youtube}/>
                    </div>
                    <div>
                        <img src={facebook}/>
                        <img src={instagram}/>
                        <img src={tiktok}/>
                        <img src={twitterx}/>
                    </div>
                </div>
            </div>
            <div className='div2'>
                <Title text='RESERVÁ TU TICKET'/>
            </div>
    </footer>
);
};

export default Footer;
