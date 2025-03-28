import React, { useState } from 'react';
import destinos from '../data/destinos.json';
import estadosmunicipios from '../data/estadosmunicipios.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";

type Destino = {
    nombre: string;
    ubicación: string;
    descripción: string;
    categoría: string;
    coordenadas: {
        latitud: number;
        longitud: number;
    };
};
type EstadosYMunicipios = {
    [estado: string]: string[];
};

const BusquedaViajes: React.FC = () => {
    const destinosData: Destino[] = destinos as Destino[];
    const estadosYMunicipios: EstadosYMunicipios = estadosmunicipios as EstadosYMunicipios;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalPassengersOpen, setIsModalPassengersOpen] = useState(false);
    const [selectedField, setSelectedField] = useState<'origin' | 'destination' | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        adults: 0,
        children: 0,
        infants: 0,
    });

    const openModal = (field: 'origin' | 'destination') => {
        setSelectedField(field);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSearchTerm('');
    };

    const handleCitySelect = (city: string) => {
        if (selectedField) {
            setFormData({ ...formData, [selectedField]: city });
        }
        closeModal();
    };

    const filteredDestinos = destinosData.filter((destino) =>
        destino.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredEstadosYMunicipios = Object.keys(estadosYMunicipios).reduce((acc, estado) => {
        const municipiosFiltrados = estadosYMunicipios[estado].filter((municipio) =>
            municipio.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (municipiosFiltrados.length > 0) {
            acc[estado] = municipiosFiltrados;
        }
        return acc;
    }, {} as EstadosYMunicipios);

    return (
        <div className="flex-1 bg-white p-5 flex flex-col justify-center items-center text-center text-caverna">
            <h1 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">
            Encuentra tu próximo destino
            </h1>
            <form className="w-full space-y-4">
            <div className="flex space-x-4">
                <div
                className="flex-1 border-2 border-caverna-300 rounded p-2 py-6 w-1/2 cursor-pointer"
                onClick={() => openModal('origin')}
                >
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    className="w-full text-ellipsis text-2xl text-center font-bold pointer-events-none"
                    placeholder="Selecciona origen"
                    value={formData.origin}
                    readOnly
                />
                <label htmlFor="origin" className="text-caverna text-center block">
                    Origen
                </label>
                </div>
                <div
                className="flex-1 border-2 border-caverna-300 rounded p-2 py-6 w-1/2 cursor-pointer"
                onClick={() => openModal('destination')}
                >
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    className="w-full text-ellipsis text-2xl text-center font-bold pointer-events-none"
                    placeholder="Selecciona destino"
                    value={formData.destination}
                    readOnly
                />
                <label htmlFor="destination" className="text-caverna text-center block">
                    Destino
                </label>
                </div>
            </div>
            <div className="md:flex md:space-x-4">
                <div className="md:flex-1 border-2 border-caverna-300 rounded p-2">
                <label htmlFor="departureDate" className="text-caverna text-xs block text-left">
                    Fecha de salida
                </label>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faRightFromBracket} className="text-caverna" />
                    <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        className="flex font-bold appearance-none"
                        defaultValue={new Date().toISOString().split('T')[0]}
                    />
                    </div>
                </div>
                <div
                className="md:flex-1 mt-4 md:mt-0 border-2 border-caverna-300 rounded p-2 cursor-pointer"
                onClick={() => setIsModalPassengersOpen(true)}
                >
                <label htmlFor="passengers" className="text-caverna text-xs block text-left">
                    Cantidad de pasajeros
                </label>
                <div className="flex space-x-2">
                    <input
                    type="text"
                    id="passengers"
                    name="passengers"
                    className="w-full text-ellipsis text-base text-left font-bold pointer-events-none"
                    placeholder="Selecciona pasajeros"
                    value={`${formData.adults || 0} Adultos, ${formData.children || 0} Niños, ${formData.infants || 0} Bebés`}
                    readOnly
                    />
                </div>
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-caverna text-acido font-bold py-2 rounded hover:bg-acido hover:text-caverna transition duration-300 ease-in-out"
            >
                Buscar viajes
            </button>
            </form>

            {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                <div className="bg-white p-4 rounded w-3/4 lg:w-1/3 xl:w-1/4 relative">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
                    onClick={closeModal}
                />
                <h2 className="text-xl font-bold mb-4">Selecciona una ciudad</h2>
                <input
                    type="text"
                    placeholder="Buscar ciudad"
                    className="w-full border border-gray-300 rounded p-2 mb-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="w-full max-h-60 overflow-y-auto text-left">
                    {selectedField === 'origin' ? (
                    Object.entries(filteredEstadosYMunicipios).length > 0 ? (
                        Object.entries(filteredEstadosYMunicipios).map(([estado, municipios], index) => (
                        <div key={index} className="mb-2">
                            <div className="font-semibold text-gray-700 p-1">{estado}</div>
                            {municipios.map((municipio, idx) => (
                            <div
                                key={idx}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleCitySelect(municipio)}
                            >
                                {municipio}
                            </div>
                            ))}
                        </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">
                        No se encontraron resultados
                        </div>
                    )
                    ) : (
                    filteredDestinos.length > 0 ? (
                        filteredDestinos.map((destino, index) => (
                        <div
                            key={index}
                            className="p-3 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleCitySelect(destino.nombre)}
                        >
                            {destino.nombre}
                        </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">
                        No se encontraron resultados
                        </div>
                    )
                    )}
                </div>
                </div>
            </div>
            )}

            {isModalPassengersOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                <div className="bg-white p-4 rounded w-3/4 lg:w-1/4 relative">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
                    onClick={() => setIsModalPassengersOpen(false)}
                />
                <h2 className="text-xl font-bold mb-4">Cantidad de pasajeros</h2>
                {(['adults', 'children', 'infants'] as Array<keyof typeof formData>).map((tipo, index) => (
                    <div key={index} className="flex items-center justify-between mb-4">
                    <span className="text-lg capitalize">{tipo === 'adults' ? 'Adultos' : tipo === 'children' ? 'Niños' : 'Bebés'}</span>
                    <div className="flex">
                        <button
                        className="bg-white text-gray-700 px-3 py-2 rounded-s border border-slate-300 hover:border-caverna"
                        onClick={() => {
                            setFormData((prev) => ({
                            ...prev,
                            [tipo]: Math.max(Number(prev[tipo] || 0) - 1, 0),
                            }));
                        }}
                        >
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="bg-white px-3 py-1 text-lg border-y border-slate-300">
                        {formData[tipo]}
                        </span>
                        <button
                        className="bg-white text-gray-700 px-3 py-2 rounded-e border border-slate-300 hover:border-caverna"
                        onClick={() => {
                            setFormData((prev) => ({
                            ...prev,
                            [tipo]: (Number(prev[tipo]) || 0) + 1,
                            }));
                        }}
                        >
                        <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
    );
};

export default BusquedaViajes;