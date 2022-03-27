import { useState, useCallback, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Page from "../components/layout/Page";
import Button from "../components/common/Button";
import { createAdvert } from "../components/adverts/service";
import FormField from "../components/common/FormField.js";

import AnimatedMulti from "../components/common/AnimatedMulti.js";

const NewAdvertPage = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState({
    name: "",
    sale: "",
    tags: "",
    price: "",
    photo: "",
  });

  const { name, sale, tags, price, photo } = content;

  const handleChange = useCallback((event) => {
    setContent((content) => ({
      ...content,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const [error, setError] = useState(null);

  const [createdAdvert, setCreatedAdvert] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);

    try {
      console.log(formData);
      const advert = await createAdvert(formData);
      setCreatedAdvert(advert);
      navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      setError(error);
    }
  };

  const buttonDisabled = useMemo(() => {
    return !name || !sale || !tags || !price;
  }, [name, sale, tags, price]);

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
          <FormField
            type='text'
            name='name'
            label='Name'
            className='loginForm-field'
            value={name}
            onChange={handleChange}
          />
          <div className='radio-group'>
            <input
              type='radio'
              id='true'
              name='sale'
              value={true}
              onChange={handleChange}
            ></input>
            <label htmlFor='true'>On Sale</label>
            <input
              type='radio'
              id='false'
              name='sale'
              value={false}
              onChange={handleChange}
            ></input>
            <label htmlFor='false'>Searching</label>
          </div>
          <FormField
            type='number'
            name='price'
            label='price'
            placeholder='€'
            className='loginForm-field'
            value={price}
            onChange={handleChange}
          />

          <FormField
            type='text'
            name='tags'
            label='Tags - lifestyle, mobile, motor, work - (one or more separated by commas)'
            className='loginForm-field'
            value={tags}
            onChange={handleChange}
          />

          <FormField
            type='file'
            name='photo'
            label='Select photo (optional)'
            className='loginForm-field'
            value={photo}
            onChange={handleChange}
          />

          <Button
            type='submit'
            className='newAdvert-submit'
            variant='primary'
            disabled={buttonDisabled}
          >
            Create Advert
          </Button>
        </form>
      </div>
    </Page>
  );
};

export default NewAdvertPage;
