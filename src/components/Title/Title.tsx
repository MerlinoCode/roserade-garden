import React from "react";
import './_Title.scss';

interface props{
    text: string;
}

const Title : React.FC<props> = ({text}) => {
    
    return(
        <div className="title">
            <p>{text}</p>
        </div>
    )
}

export default Title;