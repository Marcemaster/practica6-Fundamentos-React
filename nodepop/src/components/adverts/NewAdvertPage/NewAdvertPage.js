import Page from "../../layout/Page";
import Button from "../../common/Button";
import Photo from "../../common/Photo";
import { useState } from "react";
import { createAdvert } from "../service";
import { Navigate, useNavigate } from "react-router-dom";

const NewAdvertPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sale, setSale] = useState(0);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");

  const [error, setError] = useState(null);

  const [createdAdvert, setCreatedAdvert] = useState(null);

  /* NO PUEDO USAR ESTA FUNCIÓN PORQUE HABRÍA QUE APLICAR EL CAMBIO PARA CADA UNA DE LAS PROPS, NO HAY SOLAMENTE CONTENT.
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  */

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const advert = await createAdvert({ name, sale, price, tags, photo });
      setCreatedAdvert(advert);
      // navigate(`/adverts/${createdAdvert.id}`); OPCIONAL???
    } catch (error) {
      setError(error);
    }
  };

  if (createdAdvert) {
    return <Navigate to={`/adverts/${createdAdvert.id}`} />;
  }

  if (error?.status === 401) {
    return <Navigate to='/login' />;
  }

  return (
    <Page title='Create new advert'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' id='name' placeholder='name' name='name'></input>
          <input type='number' id='price' placeholder='price' name='price'></input>
          
          <input type='radio' id="true" name='sale' value='true'></input>
          <label htmlFor="true">On Sale</label>
          <input type='radio' id="false" name='sale' value='false'></input>
          <label htmlFor="false">Searching</label>

      
          <label htmlFor='tags'>Choose tags</label>
          <select name='tags' id='tags' multiple>
            <option value='lifestyle'>lifestyle</option>
            <option value='mobile'>mobile</option>
            <option value='motor'>motor</option>
            <option value='work'>work</option>
          </select>

          <input type="file" id="photo" alt="select image"></input>

          <Button type='submit' className='newAdvert-submit' variant='primary'>
            Create Advert
          </Button>
        </form>
      </div>
    </Page>
  );
};

export default NewAdvertPage;
