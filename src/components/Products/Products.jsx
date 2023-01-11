import React from 'react';
import ProductCard from '../../elements/ProductCard/ProductCard';
import foto1 from '../../assets/undw1.jpeg';
import foto2 from '../../assets/undrw2.jpeg';
import foto3 from '../../assets/undrw3.jpeg';
import foto4 from '../../assets/undrw4.jpeg';
import foto5 from '../../assets/undrw5.jpeg';
import foto6 from '../../assets/undrw6.jpeg';
import foto7 from '../../assets/undrw7.jpeg';
import foto8 from '../../assets/undrw8.jpeg';
import foto9 from '../../assets/undrw9.jpeg';
import foto10 from '../../assets/undrw10.jpeg';

import './Products.css';

const Products = () => {
  const undrws = [
    {
      id: 1,
      title: 'Provocation Ferrari Set',
      price: '₴3 319,00UAH',
      img: foto1,
    },
    {
      id: 2,
      title: 'Provocation Sky Blue Set',
      price: '₴3 319,00UAH',
      img: foto2,
    },
    {
      id: 3,
      title: 'Provocation Black Set',
      price: '₴3 319,00UAH',
      img: foto3,
    },
    {
      id: 4,
      title: 'Naked Extavaganza Baileys Set',
      price: '₴3 319,00UAH',
      img: foto4,
    },
    {
      id: 5,
      title: 'Provocation Baileys Set',
      price: '₴3 319,00UAH',
      img: foto5,
    },
    {
      id: 6,
      title: 'Black Basic Set',
      price: '₴3 319,00UAH',
      img: foto6,
    },
    {
      id: 7,
      title: 'Whipped Cream Basic Set',
      price: '₴3 319,00UAH',
      img: foto7,
    },
    {
      id: 8,
      title: 'Indian Ocean Basic Set',
      price: '₴3 319,00UAH',
      img: foto8,
    },
    {
      id: 9,
      title: 'Provocation Barbie Set',
      price: '₴3 319,00UAH',
      img: foto9,
    },
    {
      id: 10,
      title: 'Ferrari Basic Set',
      price: '₴3 319,00UAH',
      img: foto10,
    },
  ];
  return (
    <div className='main_container'>
      <h2>Наші товари</h2>
      <div className='prod_block'>
        {undrws.map((el) => (
          <ProductCard
            key={el.id}
            title={el.title}
            price={el.price}
            img={el.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
