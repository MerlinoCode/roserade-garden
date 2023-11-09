    import React from "react";
import './_FeatureCallout.scss'
import {default as image} from '../../assets/icons/Pokemon_GO.svg'

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
                <h2 className="feature-title">{title}</h2>
                <p className="feature-desc">{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCallout;