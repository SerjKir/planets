import React from 'react';
import '../index.css'

const Planet = ({planet, count}) => {


  return (
    <div className="planet spaceItem">
      {planet.title}
      {count !== 0 && <span className="count">{count}</span>}
    </div>
  );
};

export default Planet;