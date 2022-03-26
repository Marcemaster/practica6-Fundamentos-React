import React from "react";
import Photo from "../common/Photo.js"

const Advert = ({ name, sale, price, tags, photo, id }) => {
  return (
    <article className='advert'>
      <div className='advert-name'>{name}</div>
      <div className='advert-sale'>{sale}</div>
      <div className='advert-price'>{price}</div>
      <div className='advert-tags'>{tags}</div>
      <div className='advert-id'>{id}</div>
      <div className='advert-photo'>{photo? (
        <Photo src={photo}></Photo>) : (<Photo></Photo>
      )}</div>
    </article>
  );
};

export default Advert;
