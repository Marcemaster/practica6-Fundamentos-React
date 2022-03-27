import Button from "../common/Button";
import { deleteAdvert } from "./service.js";

function DeleteButton({ advertId }) {
  const handleDeleteAdvert = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteAdvert(advertId);
        window.location.href = "http://localhost:3000/";
      } catch (error) {
        window.alert(error);
        window.location.href = "http://localhost:3000/";
      }
    }
  };

  return <Button onClick={handleDeleteAdvert}>Delete advert</Button>;
}

export default DeleteButton;
