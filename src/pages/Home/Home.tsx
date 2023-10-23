import React from "react";
import './Home.scss'
import Hexagon from "../../assets/Hexagon";

const Home : React.FC<{}> = () => {
    
    return(
        <div className="Home">
            <div className="hexagon">
                <Hexagon/>
                <div className="text-inside-hexagon">
                    <h1>Roserade's Garden</h1>
                    <img src='https://img.icons8.com/?size=100&id=aXv0zyveYQrz&format=png'/>
                    <h3>Come to visit the exclusive attraction in the entire world made for and by pokemon fans!</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;