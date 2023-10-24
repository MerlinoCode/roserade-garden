import React from "react";
import './Home.scss'
import { default as roserade } from '../../assets/images/Roserade.svg';

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
            </div>
        </div>
    )
}

export default Home;