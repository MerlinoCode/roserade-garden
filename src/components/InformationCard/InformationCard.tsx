import React from "react";
import { default as airport } from '../../assets/icons/Airport.svg';
import { default as landscape } from '../../assets/icons/Landscape.svg';
import { default as crystalball } from '../../assets/icons/Magic_Crystal_Ball.svg';
import './_InformationCard.scss';
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
                    return  <>
                                <img src={airport}/>
                                <h2>Un Viaje Soñado</h2>
                            </>
                case 'landscape':
                    return  <>
                                <img src={landscape}/>
                                <h2>Magnífico Paisaje</h2>
                            </>
                    
                case 'crystalball':
                    return  <>
                                <img src={crystalball}/>
                                <h2>Momentos Inspiradores</h2>
                            </>
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