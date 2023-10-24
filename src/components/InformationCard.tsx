import React from "react";
import { default as airport } from '../assets/icons/Airport.svg';
import { default as landscape } from '../assets/icons/Landscape.svg';
import { default as crystalball } from '../assets/icons/Magic_Crystal_Ball.svg';
interface props{
    desc: string;
    logo: string;
}

const InformationCard : React.FC<props> = ({desc, logo}) => {
    
    return(
        <div className="information-card">
            <div className="info-logo">
            {(() => {
                switch (logo) {
                case 'airport':
                    return <img src={airport}/>
                case 'landscape':
                    return <img src={landscape}/>
                case 'crystalball':
                    return <img src={crystalball}/>
                default:
                    return null
                }
                })()}
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default InformationCard;