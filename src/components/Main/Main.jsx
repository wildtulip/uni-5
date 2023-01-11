import React from 'react';
import { Link } from 'react-router-dom';
import foto1 from '../../assets/foto1.jpeg';

import './Main.css';

const Main = () => {
  return (
    <div className='main_container'>
      <h2>Naked Extravaganza </h2>
      <div className='start_block'>
        <img className='img_foto1' src={foto1} />
        <div>
          <p className='text'>
            Це український бренд жіночої нижньої білизни, який стирає рамки між
            комфортом і унікальністю.
          </p>
          <p className='text'>
            Ми пропонуємо вам поринути у світ вишуканості та сміливості,
            одягнувши на своє тіло білизну преміальної якості.
          </p>
          <p className='text'>
            Дизайнерські комплекти нижньої білизни, розкішні купальники та
            аксесуари - все це чекає на вас. Дякуємо, що ви з нами.
          </p>
          <div className='redirect_container'>
            <Link className='kill_link' to='/products'>
              <h3>До магазину</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
