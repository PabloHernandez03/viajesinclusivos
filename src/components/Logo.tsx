import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex gap-4 justify-center items-center"
    >
      <h1 className="text-center text-caverna font-bold text-xl md:text-2xl">Viajes Inclusivos</h1>
      <FontAwesomeIcon icon={faPlaneDeparture} size="2x" className="block text-caverna"/>
    </Link>
  );
}