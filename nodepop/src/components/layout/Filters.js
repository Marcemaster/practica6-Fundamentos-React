import "./Filters.css";

import { useState, useCallback, useMemo } from "react";
import Button from "../common/Button";
import FormField from "../common/FormField.js";

function myFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("name");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("advert-name");

  for (i = 0; i < li.length; i++) {
    a = li[i].innerHTML;
    if (a.toUpperCase().indexOf(filter) > -1) {
      li[i].parentElement.style.display = "";
    } else {
      li[i].parentElement.style.display = "none";
    }
  }
}

function Filters() {
  const [content, setContent] = useState({
    sale: "",
    tags: [],
    priceMin: "",
    priceMax: "",
  });

  const { sale, tags, priceMin, priceMax } = content;

  const handleChange = useCallback((event) => {
    setContent((content) => ({
      ...content,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const [error, setError] = useState(null);

  const handleFilter = (event) => {
    event.preventDefault();

    // Conseguir los valores del multi select
    for (let option of document.getElementById("tags").options) {
      if (option.selected && !content.tags.includes(option.value) ) {
        content.tags.push(option.value);
      }
    }

    // Ahora filtrar los elementos que se muestran en el DOM según los requisitos de los filtros guardados en CONTENT

    // Filtro de venta
    const advertList = document.getElementsByClassName("advert-sale");

    for (let i = 0; i < advertList.length; i++) {
      if (
        content.sale === "true" &&
        advertList[i].textContent === "Searching"
      ) {
        advertList[i].parentElement.parentElement.style.display = "none";
      }
      if (content.sale === "false" && advertList[i].textContent === "On Sale") {
        advertList[i].parentElement.parentElement.style.display = "none";
      }
    }

    // Filtro de precios

    
    const advertListPrice = document.getElementsByClassName("advert-price");
    for (let i = 0; i < advertListPrice.length; i++) {
      if (priceMin !== "") {
        if (content.priceMin > advertListPrice[i].textContent) {
          console.log(advertListPrice[i].textContent)
          advertListPrice[i].parentElement.style.display = "none";
        }
      }

      if (priceMax !== "") {
        if (content.priceMax < advertListPrice[i].textContent) {
          advertListPrice[i].parentElement.style.display = "none";
        }
      }
    }
    

    // Filtro de tags
    if (content.tags.length >= 1) {
      const advertListTag = document.getElementsByClassName("advert-tags");
      console.log(content.tags);
      for (let i = 0; i < advertListTag.length; i++) {
        let tagArray = advertListTag[i].textContent.split(" ");
        let intersection = content.tags.filter((element) =>
          tagArray.includes(element)
        );
        
        if (intersection.length >= 1) {
        } else {
          advertListTag[i].parentElement.style.display = "none";
        }
      }
    }

  };

  return (
    <div>
      <h2>Filters</h2>
      <form id='filter-form' onSubmit={handleFilter}>
        <FormField
          type='text'
          id='name'
          name='name'
          label='Filter by Name'
          className='loginForm-field'
          onChange={myFunction}
        />

        <div className='radio-group'>
          <input
            type='radio'
            id='true'
            name='sale'
            value={true}
            onChange={handleChange}
          />
          <label htmlFor='true'>On Sale</label>
          <input
            type='radio'
            id='false'
            name='sale'
            value={false}
            onChange={handleChange}
          />
          <label htmlFor='false'>Searching</label>
          <input
            type='radio'
            id='both'
            name='sale'
            value={"both"}
            onChange={handleChange}
          />
          <label htmlFor='both'>Both</label>
        </div>

        <FormField
          type='number'
          name='priceMin'
          label='price-Min'
          placeholder='€'
          className='loginForm-field'
          value={priceMin}
          onChange={handleChange}
        />
        <FormField
          type='number'
          name='priceMax'
          label='price-max'
          placeholder='€'
          className='loginForm-field'
          value={priceMax}
          onChange={handleChange}
        />

        <div className='loginForm-field'>
          <label htmlFor='tags'>Filter by tags</label>
          <select className='loginForm-field' name='tags' id='tags' multiple>
            <option value='lifestyle'>lifestyle</option>
            <option value='mobile'>mobile</option>
            <option value='motor'>motor</option>
            <option value='work'>work</option>
          </select>
        </div>

        <Button
          type='submit'
          className='filters-submit'
          variant='primary'
        >
          Filter
        </Button>
        <Button
          type='button'
          id='filter-button'
          //onclick={window.location.reload()}
          className='filters-submit'
          variant='secondary'
        >
          <a href='/'>Reset filters</a>
        </Button>
      </form>
    </div>
  );
}

export default Filters;
