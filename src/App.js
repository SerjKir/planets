import React from 'react';
import './index.css'
import {moons, planets} from './data';
import Row from './components/Row';

const App = () => {
  return (
    <div className="container">
      {planets.map(planet => <Row key={planet.id} planet={planet} moons={moons.filter(moon => moon.planetId === planet.id)}/>)}
    </div>
  );
};

export default App;