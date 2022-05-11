import React,{useContext} from 'react';

import {CountContext} from '../App'
import "./Component.css"

function ComponentD() {
    const countContext = useContext(CountContext);
  return (
    <div className='bg-container'>ComponentD
        <br />
        <div>
        <button className='increment-btn' onClick={() =>countContext.countDispatch('increment')}>
            Increment
        </button>
        <button className='decrement-btn' onClick={() =>countContext.countDispatch('decrement')}>
            Decrement
        </button>
        <button className='reset-btn' onClick={() => countContext.countDispatch  ('reset')}>
        Reset
        </button> 
            
        </div>
    </div>
  )
}

export default ComponentD