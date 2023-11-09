import React from "react";
import './Home.scss'
import InformationCard from "../../components/InformationCard/InformationCard";
import FeatureCallout from "../../components/FeatureCallout/FeatureCallout";
import Presentation from "../../components/Presentation/Presentation";

const Home : React.FC<{}> = () => {
    
    return(
        <div className="home">
            <Presentation title="El Jardín de Roserade" desc="Ven a visitiar el primer y único atractivo turístico Hecho por fans y para fans de pokemon!"/>
            <div className="information">
                <h1>Bienvenido!</h1>
                <InformationCard logo="airport" desc="Ven a un mundo de maravillas naturales y serenidad en el Jardín de Roserade, un renombrado atractivo turístico que cautiva los corazones de millones de personas."/>
                <InformationCard logo="landscape" desc="Situado en el corazón de la capital de Salta, este impresionante santuario promete un viaje sensorial a través de paisajes meticulosamente cuidados y un oasis de flora de todo el mundo."/>
                <InformationCard 
                    logo="crystalball" 
                    desc="Descubra la magia de la naturaleza mientras se adentra en un reino de encanto y tranquilidad. 
                    Ideal para toda disfrutar con toda la familia. 
                    El jardín espera su llegada!"/>
            P</div>
            <FeatureCallout 
                imgsrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/407.png"
                title="¡Ven a visitarnos!"
                desc="Planifique su visita hoy mismo y experimente la tranquilidad y la belleza que sólo un jardín como el nuestro puede ofrecer. Ven a explorar el mundo de la flora y deje que la magia de la naturaleza le inspire."
            />
        </div>
    )
}

export default Home;