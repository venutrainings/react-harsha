import React from 'react'

import {useState,useCallback} from "react";

import Todo from '../Todo/todo';

import "./callBack.css"

function CallBack() {
const [count,setCount] = useState(0);
const [todos,setTodo] = useState([]);


const increment = () => {
    setCount((c) => c + 1);
}

const addTodo = useCallback(() => {
    setTodo((todo) => [...todo,"New Todo"])
},[todos])



  return (
      <>
        <Todo todos = {todos} addTodo = {addTodo} />
            <hr className='hr-element' />
                <div className='bg-container'>
                    <h1>
                    Count : {count}
                    </h1>
                    <button className='increment-btn' onClick={increment}>
                            +
                    </button>
                </div>
      </>
  )
}


export default  CallBack;