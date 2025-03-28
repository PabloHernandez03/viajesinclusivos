import BusquedaViajes from "@/components/BusquedaViajes";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function DashBoardView() {
  return (
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
  );
}