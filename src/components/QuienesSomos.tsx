import React from 'react';

const QuienesSomos: React.FC = () => {
    return (
        <div className="mb-8">
            <div className="my-8 text-center relative">
                <hr className="border-2 border-acido absolute top-1/2 w-full transform -translate-y-1/2" />
                <p className="relative bg-gray-100 inline-block px-2 text-caverna font-semibold text-3xl md:text-4xl">Conócenos mejor</p>
            </div>
            <div className="grid grip-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-caverna text-acido p-6 rounded-lg shadow-md row-span-1">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">Misión</h2>
                    <p className="text-center text-base md:text-lg">
                        Nuestra misión es democratizar el turismo, garantizando que todas las personas, sin importar sus capacidades, vivan experiencias de viaje memorables y seguras.
                    </p>
                </div>
                <div className="bg-caverna rounded-lg row-span-2">
                    <img 
                        src="/img/img (2).jpg" 
                        alt="Descripción de la imagen" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="bg-caverna text-acido p-6 rounded-lg shadow-md row-span-1">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">Visión</h2>
                    <p className="text-center text-base md:text-lg">
                        Nuestra visión es ser promotores en turismo inclusivo, promoviendo un mundo donde viajar sea una experiencia accesible y enriquecedora para todos.
                    </p>
                </div>
            </div>
            <div className="mt-6 p-2 sm:p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-acido hover:bg-caverna text-black hover:text-acido lg:mx-8 py-16 shadow-lg text-xl transition-colors duration-300 relative group">
                    <p className="text-center font-medium">Inclusión</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                </div>
                <div className="text-black lg:mx-8 py-16 text-3xl hover:shadow-lg transition-shadow duration-300 relative group">
                    <p className="text-center font-medium">Valores</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-black transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-black transition-all duration-500 group-hover:h-full"></span>
                </div>
                <div className="bg-acido hover:bg-caverna text-black hover:text-acido lg:mx-8 py-16 shadow-lg text-xl transition-colors duration-300 relative group">
                    <p className="text-center font-medium">Respeto</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                </div>
                <div className="bg-acido hover:bg-caverna text-black hover:text-acido lg:mx-8 py-16 shadow-lg text-xl transition-colors duration-300 relative group">
                    <p className="text-center font-medium">Empatía</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                </div>
                <div className="bg-acido hover:bg-caverna text-black hover:text-acido lg:mx-8 py-16 shadow-lg text-xl transition-colors duration-300 relative group">
                    <p className="text-center font-medium">Accesibilidad</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                </div>
                <div className="bg-acido hover:bg-caverna text-black hover:text-acido lg:mx-8 py-16 shadow-lg text-xl transition-colors duration-300 relative group">
                    <p className="text-center font-medium">Diversidad</p>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-0 h-1 bg-acido transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute top-0 right-0 h-0 w-1 bg-acido transition-all duration-500 group-hover:h-full"></span>
                </div>
            </div>
            </div>
            <hr className="border-2 border-acido w-full mt-4" />
        </div>
    );
};

export default QuienesSomos;