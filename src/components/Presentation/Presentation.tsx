import React from "react";
import './_Presentation.scss'
import { default as roserade } from '../../assets/images/Roserade.svg';

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
                    <img src={roserade}/>
                </div>
            </div>
        </div>
    )
}

export default Presentation;