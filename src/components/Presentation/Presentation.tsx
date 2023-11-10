import React from "react";
import './_Presentation.scss'

interface props{
    title: string;
    desc: string
}

const Presentation : React.FC<props> = ({title, desc}) => {
    
    return(
        <div className="presentation">
            <div className="presentation-content">
                <div className="rectangle">
                    <h1>{title}</h1>
                    <h3>{desc}</h3>
                </div>
                <div className="roserade-image">
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png'/>
                </div>
            </div>
        </div>
    )
}

export default Presentation;