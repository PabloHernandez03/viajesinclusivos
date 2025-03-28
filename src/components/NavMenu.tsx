import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-1 flex-wrap text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Inicio
            </NavLink>
            {/* <NavLink
                to="/destinos-accesibles"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Destinos Accesibles
            </NavLink>
            <NavLink
                to="/actividades-inclusivas"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Actividades Inclusivas
            </NavLink>
            <NavLink
                to="/recursos-adaptados"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Recursos Adaptados
            </NavLink>
            <NavLink
                to="/consejos-viaje"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Consejos de Viaje
            </NavLink>
            <NavLink
                to="/testimonios"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Testimonios
            </NavLink>
            <NavLink
                to="/contacto"
                className={({ isActive }) =>
                    `hover:text-acido p-2 px-3 ${
                        isActive ? 'text-acido border-b-2 font-bold border-[#FFD801]' : 'text-caverna'
                    }`
                }
            >
                Contacto
            </NavLink> */}
        </nav>
    );
}
