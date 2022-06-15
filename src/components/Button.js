import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../stylesheets/Button.css'

function Button(props){
  const ifNan=value=>{
    return isNaN(value) && (value !=='.') && (value !== '=')
  }
    
    
  return(
      <button className={`btn  ${ifNan(props.children) ?  'bg-danger' : 'bg-primary'} text-dark fs-1 me-3 `}>{props.children}</button>
    );
}

export default Button;

