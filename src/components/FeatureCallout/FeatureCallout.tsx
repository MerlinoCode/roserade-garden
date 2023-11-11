    import React from "react";
import './_FeatureCallout.scss'
import {default as image} from '../../assets/icons/Pokemon_GO.svg'
import Title from "../Title/Title";

interface props{
    title: string;
    desc: string
}

const FeatureCallout : React.FC<props> = ({title, desc}) => {
    return(
        <div className="feature-content">
            <div className="image-feature">
                <img src={image}/>
            </div>
            <div className="feature-text">
                <Title text={title} type='large' border={false}/>
                <p className="feature-desc">{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCallout;