import React from 'react';
import './ProductCard.css';

const ProductCard = ({ img, title, price }) => {
  return (
    <div className='card_body'>
      <img src={img} className='card_foto' alt='зображення товару' />
      <div className='info_block'>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
