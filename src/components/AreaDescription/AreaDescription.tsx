import React from "react";
import './_AreaDescription.scss';

interface props{
    title: string;
    desc: string;
    image: string;
}

const AreaDescription : React.FC<props> = ({title, desc, image}) => {
    
    return(
        <div className="description">
            <h2 className="area-title">{title}</h2>
            <p className="text-desc">{desc}</p>
            <div className="background-divisor"></div>
            <div className="image-wrapper">
                <img className="photo" src={image}/>
            </div>
        </div>
    )
}

export default AreaDescription;