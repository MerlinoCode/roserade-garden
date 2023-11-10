import './_Sidebar.scss';

const Sidebar : React.FC<{}> = () => 
{
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-links">
                    <li>
                        <a href="#desc-1">El Jardín de Roserade</a>
                    </li>
                    <li>
                        <a href="#desc-2">Laberinto de las Rosas</a>
                    </li>
                    <li>
                        <a href="#desc-3">Exhibición Pokémon</a>
                    </li>
                    <li>
                        <a href="#desc-4">Sesiones de Fotografía</a>
                    </li>
                    <li>
                        <a href="#desc-5">Talleres de Jardinería</a>
                    </li>
                    <li>
                        <a href="#desc-6">Zona de Descanso</a>
                    </li>
                    <li>
                        <a href="#desc-7">Área de Picnic</a>
                    </li>
                    <li>
                        <a href="#desc-8">Mirador Escénico</a>
                    </li>
                    <li>
                        <a href="#desc-9">Área de Juegos para Niños</a>
                    </li>
                </ul>
            </nav>
        </aside>
)};

export default Sidebar;
