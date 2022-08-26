import React, {useState} from 'react';
import '../index.css'
import Planet from './Planet';
import Moon from './Moon';
import Circle from './Circle';

const Row = ({planet, moons}) => {

  const [count, setCount] = useState(0);

  const handleChange = (data) => {
    data ? setCount(count + 1) : setCount(count - 1);
  };



  return (
    <div className="row">
      {count > 0 ? <Circle><Planet count={count} planet={planet} /></Circle> : <Planet count={count} planet={planet} />}
      {moons.map(moon => <Moon handleChange={handleChange} key={moon.id} moon={moon} />)}
    </div>
  );
};

export default Row;