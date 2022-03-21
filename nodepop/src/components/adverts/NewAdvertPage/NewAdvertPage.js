import Page from "../../layout/Page";
import Textarea from "../../common/Textarea";
import Button from "../../common/Button";
import { useState } from "react";
import { createAdvert } from "../service";
import { Navigate, useNavigate } from "react-router-dom";

const NewAdvertPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sale, setSale] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [photo, setPhoto] = useState("");

  const [error, setError] = useState(null);

  const [createdAdvert, setCreatedAdvert] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

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

  if (createdTweet) {
    return <Navigate to={`/adverts/${createdAdvert.id}`} />;
  }

  if (error?.status === 401) {
    return <Navigate to='/login' />;
  }
    /* ESTO ES LO ÚNICO QUE FALTA COPIAR DE LA CREACIÓN DE ANUNCIOS. ESTE ARCHIVO ES TODO FRUTA, SE ESTÁ IMPROVISANDO.
  return (
    <Page title='What are you thinking...'>
      <div className='newTweetPage bordered'>
        <div className='left'>
          <Photo />
        </div>
        <div className='right'>
          <form onSubmit={handleSubmit}>
            <Textarea
              className='newTweetPage-textarea'
              placeholder="Hey! What's up!"
              value={content}
              onChange={handleChange}
              maxLength={MAX_CHARACTERS}
            />
            <div className='newTweetPage-footer'>
              <span className='newTweetPage-characters'>{characters}</span>
              <Button
                type='submit'
                className='newTweetPage-submit'
                variant='primary'
                disabled={buttonDisabled}
              >
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );*/
};

export default NewAdvertPage;
