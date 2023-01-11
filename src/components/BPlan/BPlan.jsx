import React from 'react';
import bPlan from '../../file/buis_plan.pdf';

const BPlan = () => {
  return (
    <div>
      <iframe
        id='fred'
        title='PDF'
        src={bPlan}
        frameBorder='1'
        scrolling='auto'
        height='1000'
        width='100%'
      ></iframe>
    </div>
  );
};

export default BPlan;
