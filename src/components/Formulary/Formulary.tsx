import React from "react";
import './_Formulary.scss'
import Title from "../Title/Title";
import InputForm from "../InputForm/InputForm";

interface props{
    title: string;
}

const Formulary : React.FC<props> = ({title}) => {
    return(
        <div className="form-content">
            <Title text={title} type='medium' border={true}/>
                <form>
                    <InputForm id="name" type="text" text='Nombre y Apellido'/>
                    <InputForm id="mail" type="mail" text='Dirección de Email'/>
                    <InputForm id="phone" type="text" text='Número de Celular'/>
                    <InputForm id="ticket" type="number" text='Número de Tickets'/>
                    <input className="button-form" type="submit" value="Enviar"/>
                </form>
        </div>
    )
}

export default Formulary;