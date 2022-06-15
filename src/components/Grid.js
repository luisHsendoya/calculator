
import React from 'react';
import Button from './Button'
import '../stylesheets/Grid.css';


function Grid(){

  return(
    <div className="container">
        
      <div className="row1">
        <Button  className="btn-primario">7</Button>
        <Button  className="btn-primario"  >8</Button>
        <Button  className="btn-primario">9</Button>
        <Button  className="btn signal" >/</Button>
      </div>
      <div className="row2">
        <Button  className="btn-primario">4</Button>
        <Button  className="btn-primario">5</Button>
        <Button  className="btn-primario">6</Button>
        <Button className="btn signal">*</Button>
      </div>
      <div className="row3">
        <Button  className="btn-primario">1</Button>
        <Button  className="btn-primario">2</Button>
        <Button  className="btn-primario">3</Button>
        <Button className="btn signal">-</Button>
      </div>
      <div className="row4">
        <Button  className="btn-primario">0</Button>
        <Button  className="btn-primario">1</Button>
        <Button  className="btn-primario">.</Button>
        <Button  className="btn-primario">=</Button>
      </div>
       
      </div>
  );
}

export default Grid;

