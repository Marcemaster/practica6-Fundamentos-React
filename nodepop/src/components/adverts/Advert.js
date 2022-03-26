import React from "react";

const Advert = ({ name, sale, price, tags, photo }) => {
  return (
    <article className='advert'>
      <div className='advert-name'>{name}</div>
      <div className='advert-sale'>{sale}</div>
      <div className='advert-price'>{price}</div>
      <div className='advert-tags'>{tags}</div>
      <img className='advert-photo' alt='advert' src={photo}></img>
    </article>
  );
};

export default Advert;
