import React from 'react';

const QuienesSomos: React.FC = () => {
    return (
        <div className="mb-8">
            <div className="my-8 text-center relative">
                <hr className="border-2 border-acido absolute top-1/2 w-full transform -translate-y-1/2" />
                <p className="relative bg-gray-100 inline-block px-2 text-caverna font-semibold text-3xl">Conócenos mejor</p>
            </div>
            <div className="grid grip-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-caverna text-acido p-6 rounded-lg shadow-md">
                    <h2 className="text-center text-2xl font-semibold mb-2">Misión</h2>
                    <p className="text-center text-base">
                        Nuestra misión es democratizar el turismo, garantizando que todas las personas, sin importar sus capacidades, vivan experiencias de viaje memorables y seguras.
                    </p>
                </div>
                <div className="bg-caverna rounded-lg">
                    <img 
                        src="/img/img (2).jpg" 
                        alt="Descripción de la imagen" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className="mt-6 bg-caverna p-6 rounded-lg">
            <h2 className="text-acido text-center text-2xl font-semibold mb-4">Valores</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-acido text-black p-4 rounded-lg shadow-md">
                    <p className="text-center font-medium">Inclusión</p>
                </div>
                <div className="bg-acido text-black p-4 rounded-lg shadow-md">
                    <p className="text-center font-medium">Respeto</p>
                </div>
                <div className="bg-acido text-black p-4 rounded-lg shadow-md">
                    <p className="text-center font-medium">Empatía</p>
                </div>
                <div className="bg-acido text-black p-4 rounded-lg shadow-md">
                    <p className="text-center font-medium">Innovación en accesibilidad</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default QuienesSomos;