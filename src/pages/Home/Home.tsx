import React from "react";
import './Home.scss'
import { default as roserade } from '../../assets/images/Roserade.svg';
import InformationCard from "../../components/InformationCard";

const Home : React.FC<{}> = () => {
    
    return(
        <div className="home">
            <div className="rectangle">
                <h1>El Jardín de Roserade</h1>
                <h3>Ven a visitiar el primer y único atractivo turístico Hecho por fans y para fans de pokemon!</h3>
            </div>
            <div className="roserade-image">
                <img src={roserade}/>
            </div>
            <div className="information">
                <h1>Bienvenido!</h1>
                <InformationCard logo="airport" desc="Ven a un mundo de maravillas naturales y serenidad en el Jardín de Roserade, un renombrado atractivo turístico que cautiva los corazones de millones de personas."/>
                <InformationCard logo="landscape" desc="Situado en el corazón de Buenos Aires, este impresionante santuario promete un viaje sensorial a través de paisajes meticulosamente cuidados y un oasis de flora de todo el mundo."/>
                <InformationCard logo="crystalball" desc="Descubra la magia de la naturaleza mientras se adentra en un reino de encanto y tranquilidad, el jardín espera su llegada!"/>
            </div>
        </div>
    )
}

export default Home;