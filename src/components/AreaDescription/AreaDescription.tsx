import React from "react";
import './_AreaDescription.scss';
import Title from "../Title/Title";

interface props{
    desc: string;
    id: string;
    image: string;
    title: string;
}

const AreaDescription : React.FC<props> = ({desc, id, image, title}) => {
    
    return(
        <div className="description" id={id}>
            <div className="area-title">
                <Title text={title} type='medium-2' border={true}/>
            </div>
            <p className="text-desc">{desc}</p>
            <div className="background-divisor"></div>
            <div className="image-wrapper">
                <img className="photo" src={image}/>
            </div>
        </div>
    )
}

export default AreaDescription;