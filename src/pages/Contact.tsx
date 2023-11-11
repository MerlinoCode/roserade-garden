import React from "react";
import Title from "../components/Title/Title";

const Contact : React.FC<{}> = () => {
    
    return(
        <div className="contact">
            <Title text="Contacto" type='medium' border={true}/>
        </div>
    )
}

export default Contact;