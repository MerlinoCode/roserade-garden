import React from "react";
import AreaDescription from "../../components/AreaDescription/AreaDescription";
import Sidebar from "../../components/Sidebar/Sidebar";
import './_Garden.scss';

const Garden : React.FC<{}> = () => {
    
    return(
        <div className="garden">
            <Sidebar/>
            <div className="garden-descriptions">
                <AreaDescription id="desc-1" image='https://images.unsplash.com/photo-1550948390-6eb7fa773072' title='El Jardín de Roserade' desc='Explora la esencia misma de la elegancia en nuestro exquisito "Jardín de Roserade". Aquí, las rosas florecen en una sinfonía de colores y fragancias, creando un ambiente de serenidad y belleza. Pasea por caminos serpenteantes rodeados de hermosas flores y descubre la magia que solo Roserade puede inspirar.'/>
                <AreaDescription id="desc-2" image='https://images.unsplash.com/photo-1585320806297-9794b3e4eeae' title='Laberinto de las Rosas' desc='Adéntrate en el enigmático "Laberinto de las Rosas". Este laberinto floral es una maravilla de la naturaleza, donde la diversión y la aventura se entrelazan. Pierde la noción del tiempo mientras buscas el camino correcto y descubre sorpresas escondidas en cada esquina. ¡Un desafío que encantará a visitantes de todas las edades!'/>
                <AreaDescription id="desc-3" image='https://images.unsplash.com/photo-1612454376902-577cd469d008' title='Exhibición Pokémon' desc='En nuestra "Exhibición Pokémon," sumérgete en el emocionante mundo de Roserade y otros Pokémon de la región. Descubre la historia, el arte y la cultura que rodean a estos seres mágicos. Desde raras cartas Pokémon hasta impresionantes ilustraciones, esta exhibición es una delicia para los fanáticos de todas las edades.'/>
                <AreaDescription id="desc-4" image='https://images.unsplash.com/photo-1652039350038-3fb0eb6559bc' title='Sesiones de Fotografía' desc='Para los amantes de la fotografía, ofrecemos "Sesiones de Fotografía" únicas en el "Jardín de Roserade". Los colores vibrantes y la belleza natural proporcionan el telón de fondo perfecto para capturar momentos inolvidables. Nuestros paisajes cautivadores son ideales para obtener imágenes impresionantes.'/>
                <AreaDescription id="desc-5" image='https://images.unsplash.com/photo-1527863280617-15596f92e5c8' title='Talleres de Jardinería' desc='¿Te gustaría aprender los secretos de la jardinería? Únete a nuestros "Talleres de Jardinería" y descubre cómo cuidar de las rosas y las flores como un auténtico Entrenador Pokémon. Nuestros expertos en jardinería te guiarán en el arte de cultivar y mantener un jardín floreciente.'/>
                <AreaDescription id="desc-6" image='https://images.unsplash.com/photo-1510901340205-7769c0c19954' title='Zona de Descanso' desc='Nuestra "Zona de Descanso" es un remanso de tranquilidad en medio de la belleza natural. Disfruta de un tranquilo momento bajo la sombra de los árboles o siéntate en un banco rodeado de flores fragantes. Es el lugar perfecto para relajarte y disfrutar de la paz que solo el Jardín de Roserade puede ofrecer.'/>
                <AreaDescription id="desc-7" image='https://images.unsplash.com/photo-1474899351970-ee05f7dd1334' title='Área de Picnic' desc='Organiza un picnic inolvidable en nuestra "Área de Picnic". Rodeado de la belleza de la naturaleza y con amplias zonas verdes, este es el lugar perfecto para disfrutar de una comida al aire libre con amigos y familiares. ¡Convierte tu visita en una experiencia gastronómica en medio de un paraíso floral!'/>
                <AreaDescription id="desc-8" image='https://images.unsplash.com/photo-1532969058732-3615a226bbc2' title='Mirador Escénico' desc='Nuestro "Mirador Escénico" ofrece vistas panorámicas de todo el jardín. Sube a lo más alto y admira la belleza que te rodea. Es el lugar perfecto para tomar fotografías impresionantes y apreciar la magnificencia del jardín desde lo más alto.'/>
                <AreaDescription id="desc-9" image='https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98' title='Área de Juegos para Niños' desc='Los más pequeños encontrarán diversión ilimitada en nuestra "Área de Juegos para Niños". Toboganes, columpios y juegos interactivos harán que los niños se diviertan a lo grande mientras exploran el mundo de Roserade.'/>
            </div>
        </div>
    )
}

export default Garden;