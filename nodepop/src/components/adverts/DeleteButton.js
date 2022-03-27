import Button from "../common/Button";
import { deleteAdvert } from "./service.js";

function DeleteButton({ advertId }) {
  const handleDeleteAdvert = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteAdvert(advertId);
        console.log("Anuncio Borrado!");
        window.location.href = "http://localhost:3000/";
      } catch (error) {
        console.log("No se ha podido borrar el anuncio");
        window.location.href = "http://localhost:3000/";
      }
    }
  };

  return (
    <Button onClick={handleDeleteAdvert}>Borrar anuncio componente</Button>
  );
}

export default DeleteButton;
