import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contacts_main'>
      <div className='conctacts_block'>
        <p className='title_contact'>extravaganza.</p>
        <p className='contact'>Premium quality • Unique design</p>
        <p className='contact'>The tailoring period is up to 5 working days</p>
        <p className='contact'>Worldwide 🌐 delivery</p>
        <p className='contact'>From 🇺🇦</p>
        <p className='contact'>+38 (077) 777 77 77</p>
      </div>
      <div className='conctacts_block'>
        <p className='contact'>Робота виконана:</p>
        <p className='title_contact'>Денисом Ковальовим</p>

        <p className='contact'>ЛА-22мп</p>
      </div>
    </div>
  );
};

export default Contacts;
