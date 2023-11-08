import React from "react";
import './_FeatureCallout.scss'

interface props{
    imgsrc: string;
    title: string;
    desc: string
}

const FeatureCallout : React.FC<props> = ({imgsrc, title, desc}) => {
    
    return(
        <div className="feature-callout">
            <div className="image-feature">
                <img src={imgsrc}/>
            </div>
            <div className="feature-text">
                <h2 className="feature-title">{title}</h2>
                <p className="feature-text">{desc}</p>
            </div>

        </div>
    )
}

export default FeatureCallout;