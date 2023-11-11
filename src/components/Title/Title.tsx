import React from "react";
import './_Title.scss';

interface props{
    text: string;
    type: string;
    border: boolean;
}

const Title : React.FC<props> = ({text, type, border}) => {
    function formatClassText(){
        let textClass:string='';
        textClass = border ? "border "  : '';
        textClass += ['small', 'medium', 'medium-2', 'large', 'xLarge'].includes(type) ? type : '';
        return textClass;
    }
    return(
        <div className="title">
            <p className={formatClassText()}>{text}</p>
        </div>
    )
}

export default Title;