import React from 'react'

import {useReducer,useRef} from "react";

import "./Todo.css"

function Todo() {
    const item = {type : "Add", name : "Harsha"};

    const inputRef = useRef();

    const [items,dispatch] = useReducer((state,action) => {
        switch(action.type){
            case "Add":
                return [
                    ...state,
                    {
                        id : state.length + 1,
                        name : action.name
                    }
                ];
            case "Remove":
                return state.filter((_,index) => index !== action.index);
            default:
                return state;    
        }
    },[item]);


    function addName(event){
        event.preventDefault();
        dispatch(
            {
                type : "Add",
                name : inputRef.current.value
            }
        );
        inputRef.current.value = ""
    }

  return (
    <div>
        <input className='input-element' ref = {inputRef}></input>

        <button className='btn' onClick={addName}>ADD</button>

        <ul>
            {items.map((item,index)=>
                <li className='list-items' key = {item.id}>
                    {item.name}
                    <button className='btn' onClick={() => dispatch(
                            {
                                type : "Remove",
                                index
                            }
                        )}>
                        Remove
                    </button>
                </li>
            )}
        </ul>
    </div>
  )
}



export default Todo;