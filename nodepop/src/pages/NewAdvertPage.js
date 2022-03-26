import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Page from "../components/layout/Page";
import Button from "../components/common/Button";
import { createAdvert } from "../components/adverts/service";

const NewAdvertPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");

  const [error, setError] = useState(null);

  const [createdAdvert, setCreatedAdvert] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSaleChange = (event) => {
    setSale(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };


  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);

    try {
      console.log(formData)
      const advert = await createAdvert(formData);
      setCreatedAdvert(advert);
      // navigate(`/adverts/${createdAdvert.id}`); OPCIONAL???
    } catch (error) {
      setError(error);
    }
  };

  /*if (createdAdvert) {
    return <Navigate to={`/adverts/${createdAdvert.id}`} />;
  }*/
  // FALTA COMPROBAR LA SELECCIÓN MULTIPLE EN EL FORMULARIO
  // QUE LOS CAMPOS DE NOMBRE, PRECIO, VENTA, TAGS SEAN REQUERIDOS PARA PODER ENVIAR LA PETICIÓN
  // QUE EL CAMPO FOTO SEA OPCIONAL Y QUE HAYA UN CHECKBOX QUE LO ACTIVE O DESACTIVE

  if (error?.status === 401) {
    return <Navigate to='/login' />;
  }

  return (
    <Page title='Create new advert'>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='name'
            placeholder='name'
            name='name'
            value={name}
            onChange={handleNameChange}
          ></input>

          <input
            type='radio'
            id='true'
            name='sale'
            value={sale}
            onChange={handleSaleChange}
          ></input>
          <label htmlFor='true'>On Sale</label>
          <input type='radio' id='false' name='sale' value={sale}></input>
          <label htmlFor='false'>Searching</label>

          <input
            type='number'
            id='price'
            placeholder='price'
            name='price'
            value={price}
            onChange={handlePriceChange}
          ></input>

          <label htmlFor='tags'>Choose tags</label>
          <select name='tags' id='tags' onChange={handleTagsChange} value={[tags]} multiple>
            <option value="lifestyle" >lifestyle</option>
            <option value="mobile" >mobile</option>
            <option value="motor" >motor</option>
            <option value="work" >work</option>
          </select>

          <input
            type='file'
            name="photo"
            id='photo'
            alt='select image'
            value={photo}
            onChange={handlePhotoChange}
          ></input>

          <Button type='submit' className='newAdvert-submit' variant='primary'>
            Create Advert
          </Button>
        </form>
      </div>
    </Page>
  );
};

export default NewAdvertPage;
