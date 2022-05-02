import React from 'react';
import {useRef,useState,useEffect} from "react";

import "./RefHooks.css"

function RefHooks() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    }

    const [inputValue,setValue] = useState("")
    const previousValue = useRef("")
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    })

    useEffect(() => {
        previousValue.current = inputValue;
    },[inputValue])

  return (
    <div className='bg-container'>
        <input ref={inputElement} className='input-element' type = "text" placeholder='Enter Text Here' onChange={(event) => setValue(event.target.value)}/>
        <input className='input-element' type = "text" placeholder='Focus Input' />

        <button className='focus-btn' onClick={focusInput}>
            Focus Input
        </button>

        <h1 className='value-heading'>
            Current Value : <span className='span-value'>
            {inputValue}
            </span>
        </h1>
        <h2 className='value-heading'>
            Previous Value : <span className='span-value'>
            {previousValue.current}
            </span>
        </h2>

        <h1 className='value-heading'>
            Render Count : <span className='span-value'>
            {count.current}
            </span>
        </h1>


    </div>
  )
}


export default RefHooks