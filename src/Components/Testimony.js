import React from 'react';
import '../Stylesheets/Testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img className='img-testimony' src={require(`../Image/testimonio-${props.img}.png`)}
      alt='Photo of Emma' />
      <div className='container-text-testimony'> 
      <p className='name-testimony'>
        <strong>{props.name}</strong> in {props.country}
        </p>
      <p className='position-testimony'>
        {props.position} in <strong>{props.business}</strong>
        </p>
      <p className='text-testimony'>{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
