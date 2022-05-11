import React from 'react'

import {useState,useCallback,useMemo} from "react";

import Todo from '../Todo/todo';

import "./memo.css"

function Memo() {
const [count,setCount] = useState(0);
const calculation = useMemo(() => expensiveCalculation(count),[count]);


const increment = () => {
    setCount((c) => c + 1);
}


  return (
      <>
        <Todo  />
            <hr className='hr-element' />
                <div className='bg-container'>
                    <h1>
                    Count : {count}
                    </h1>
                    <button className='increment-btn' onClick={increment}>
                            +
                    </button>

                    <h2>
                        Expensive Calculation  : <span className='span-value'>
                        {calculation}
                        </span>
                    </h2>
                    
                </div>
      </>
  )
}

const expensiveCalculation = (num) => {
    for (let i = 0; i > 2000 ; i ++){
        num += 1;
    }
    return num;
}


export default  Memo;