import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-1 flex-wrap text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Inicio
            </NavLink>
            <NavLink
                to="/destinos-accesibles"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Destinos Accesibles
            </NavLink>
            <NavLink
                to="/actividades-inclusivas"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Actividades Inclusivas
            </NavLink>
            <NavLink
                to="/recursos-adaptados"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Recursos Adaptados
            </NavLink>
            <NavLink
                to="/consejos-viaje"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Consejos de Viaje
            </NavLink>
            <NavLink
                to="/testimonios"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Testimonios
            </NavLink>
            <NavLink
                to="/contacto"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna font-bold'
                    }`
                }
            >
                Contacto
            </NavLink>
        </nav>
    );
}
