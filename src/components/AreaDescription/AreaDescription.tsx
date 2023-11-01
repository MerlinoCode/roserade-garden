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
            <p className="">{desc}</p>
        </div>
    )
}

export default AreaDescription;