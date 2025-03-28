import BusquedaViajes from "@/components/BusquedaViajes";
import QuienesSomos from "@/components/QuienesSomos";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach, faHotel, faPlane, faFaceSmileBeam, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function DashBoardView() {
  return (
    <div>
      <div className="lg:flex h-full my-4">
      {/* Sección izquierda con el formulario de búsqueda */}
      <BusquedaViajes />

      {/* Sección derecha con el carrusel */}
      <div className="flex-1 bg-gray-200">
        <Carousel 
          autoPlay 
          interval={3000} 
          infiniteLoop 
          stopOnHover 
          swipeable 
          showThumbs={false} 
          showStatus={false}
        >
            <div className="flex justify-center items-center h-full">
              <img
                src="/img/lugar_01.webp"
                alt="Teotihuacan"
                className="object-cover h-full"
              />
            </div>
            <div className="flex justify-center items-center h-full">
              <img
                src="/img/lugar_02.webp"
                alt="Chichen Itza"
                className="object-cover h-full"
              />
            </div>
            <div className="flex justify-center items-center h-full">
              <img
                src="/img/lugar_03.webp"
                alt="Palenque"
                className="object-cover h-full"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Sección inferior con secciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 mb-8">
        {/* Carta de Viajes */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center pt-6 pb-12 hover:shadow-2xl transition-shadow duration-300 group col-span-2 lg:col-span-1">
          <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" className="text-white mb-2 p-6 rounded-full bg-caverna bg-opacity-75 group-hover:bg-acido transition-colors duration-300 group-hover:text-caverna" />
          <h3 className="text-center text-lg font-bold mb-2 group-hover:text-acido transition-colors duration-500">Viajes</h3>
          <p className="text-gray-600">Explora destinos increíbles con nuestras ofertas de viajes.</p>
        </div>

        {/* Carta de Hoteles */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center pt-6 pb-12 hover:shadow-2xl transition-shadow duration-300 group">
          <FontAwesomeIcon icon={faHotel} size="2x" className="text-white mb-2 p-6 rounded-full bg-caverna bg-opacity-75 group-hover:bg-acido transition-colors duration-300 group-hover:text-caverna" />
          <h3 className="text-center text-lg font-bold mb-2 group-hover:text-acido transition-colors duration-500">Hoteles</h3>
          <p className="text-gray-600">Encuentra los mejores hoteles para tu estancia.</p>
        </div>

        {/* Carta de Transporte */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center pt-6 pb-12 hover:shadow-2xl transition-shadow duration-300 group">
          <FontAwesomeIcon icon={faPlane} size="2x" className="text-white mb-2 p-6 rounded-full bg-caverna bg-opacity-75 group-hover:bg-acido transition-colors duration-300 group-hover:text-caverna" />
          <h3 className="text-center text-lg font-bold mb-2 group-hover:text-acido transition-colors duration-500">Transporte</h3>
          <p className="text-gray-600">Viaja cómodamente con nuestras opciones de transporte.</p>
        </div>

        {/* Carta de Actividades */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center pt-6 pb-12 hover:shadow-2xl transition-shadow duration-300 group">
          <FontAwesomeIcon icon={faFaceSmileBeam} size="2x" className="text-white mb-2 p-6 rounded-full bg-caverna bg-opacity-75 group-hover:bg-acido transition-colors duration-300 group-hover:text-caverna" />
          <h3 className="text-center text-lg font-bold mb-2 group-hover:text-acido transition-colors duration-500">Actividades</h3>
          <p className="text-gray-600">Disfruta de actividades emocionantes en tu destino.</p>
        </div>

        {/* Carta de Testimonios */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center pt-6 pb-12 hover:shadow-2xl transition-shadow duration-300 group">
          <FontAwesomeIcon icon={faUserGroup} size="2x" className="text-white mb-2 p-6 rounded-full bg-caverna bg-opacity-75 group-hover:bg-acido transition-colors duration-300 group-hover:text-caverna" />
          <h3 className="text-center text-lg font-bold mb-2 group-hover:text-acido transition-colors duration-500">Testimonios</h3>
          <p className="text-gray-600">Lee lo que otros viajeros dicen sobre nosotros.</p>
        </div>
      </div>

      { /* Sección de "¿Quiénes somos?" */}
        <QuienesSomos />
    </div>
  );
}