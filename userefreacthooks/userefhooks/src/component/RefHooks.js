import React from 'react';

import {useState,useEffect,useRef} from "react";

import "./RefHooks.css";

function RefHooks() {

  const [inputValue,setInputValue] = useState("");

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const previousElement = useRef("");

  const count = useRef(0);

  

  useEffect(() => {
    previousElement.current = inputValue;
    count.current = count.current + 1;
  },[inputValue])


  return (
    <div className='bg-container'>

      <div className='heading-container'>
        <h1 className='heading'>
          useRef
        </h1>
        <input ref={inputElement} 
          className='input-element' type = "text" placeholder='Enter Input Value Here' 
          onChange={(event) => setInputValue(event.target.value)} />

          <input onChange={(event) => setInputValue(event.target.value)}  className='input-element' type = "text" placeholder='Enter Focus Input Here' />

          <button onClick={focusInput} className='focus-btn'>
            Focus btn
          </button>

        

          <h1 className='value-inputs'>
            Current Value : <span className='span-value'>
            {inputValue}  
            </span>
          </h1>

          <h1 className='value-inputs'>
            Previous Value : <span className='span-value'>
            {previousElement.current}  
            </span>
          </h1>

          <h1 className='value-inputs'>
            Render Count : <span className='span-value'>
            {count.current}  
            </span>
          </h1>
        </div>
      </div>
  )
}

export default RefHooks;