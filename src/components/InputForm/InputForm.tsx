import React from "react";
import './_InputForm.scss';
import { default as person } from '../../assets/icons/Form/Person.svg';
import { default as mail } from '../../assets/icons/Form/Mail.svg';
import { default as phone } from '../../assets/icons/Form/Phone.svg';
import { default as ticket  } from '../../assets/icons/Form/Ticket.svg';

interface props{
    id: string;
    text: string;
    type: string;
}

const InputForm : React.FC<props> = ({id,text,type}) => {
    
    return(
        <div className="input-container">
            {(() => {
                switch (id) {
                case 'name':
                    return <img src={person}/>
                case 'mail':
                    return <img src={mail}/>
                case 'phone':
                    return <img src={phone}/>
                case 'ticket':
                    return <img src={ticket}/>
                default:
                    return null
                }
                })()}
            <input className="input-field" type={type} name={id}  placeholder={text} />
        </div>
    )
}

export default InputForm;