import React from 'react';
import glider from '../assets/glider.png';
import lite_spaceship from '../assets/lite_spaceship.png';
import pulsar from '../assets/pulsar.png';

const Patterns = () => {
  return (
    <div>
      <h1>Example Patterns to tryout</h1>

      <div className='examples'>
        <div className='pattern'>
          <div className='patternDesc'>
            <h2>Glider</h2>
            <p>A glider will keep on moving forever across the plane.</p>
          </div>
          <img src={glider} className='patternImg' />
        </div>

        <div className='pattern'>
          <div className='patternDesc'>
            <h2>Light Spaceship</h2>
            <p>Slowly and steadily moves across the grid.</p>
          </div>
          <img src={lite_spaceship} className='patternImg' />
        </div>

        <div className='pattern'>
          <div className='patternDesc'>
            <h2>Pulsar</h2>
            <p>Population of three phases.</p>
          </div>
          <img src={pulsar} className='patternImg' />
        </div>
      </div>
    </div>
  );
};

export default Patterns;
