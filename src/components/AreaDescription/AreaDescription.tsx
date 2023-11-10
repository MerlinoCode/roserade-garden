import React from "react";
import './_AreaDescription.scss';

interface props{
    desc: string;
    id: string;
    image: string;
    title: string;
}

const AreaDescription : React.FC<props> = ({desc, id, image, title}) => {
    
    return(
        <div className="description" id={id}>
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