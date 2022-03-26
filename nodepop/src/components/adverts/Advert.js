import React from "react";

const Advert = ({ name, sale, price, tags, photo, id }) => {
  return (
    <article className='advert'>
      <div className='advert-name'>{name}</div>
      <div className='advert-sale'>{sale}</div>
      <div className='advert-price'>{price}</div>
      <div className='advert-tags'>{tags}</div>
      <div className='advert-tags'>{id}</div>
      <img className='id' alt='advert' src={photo}></img>
    </article>
  );
};

export default Advert;
