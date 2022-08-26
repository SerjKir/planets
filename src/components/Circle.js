import React from 'react';
import '../index.css'

const Circle = ({children}) => {
  return (
    <div className="circle">
      {children}
    </div>
  );
};

export default Circle;