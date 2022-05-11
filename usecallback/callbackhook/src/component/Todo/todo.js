import React from 'react'

// import {memo} from "react";

import "./todo.css"



    const Todos = ({todos,addTodo}) => {

        // const [value,setValue] = useState('');


       

        // const addTodo = useCallback() => {
        //     if(value !== ""){
        //         setTodo((todo) => [...todo,value])
        //         setValue('')
        //     }
        //     else {
        //         alert("Enter Any Text");
        //     }
        // }
        return (
            <div className='bg-container'>
                <h1 className='todo-heading'>
                    MY TODOS
                </h1>
                {/* <input placeholder='Enter Text Here' value = {value} onChange={(event) => setValue(event.target.value) } className='input-element' type = "text" /> */}
                {todos.map((todo,index) => {
                    return <p className='new-todo' key = {index}>{todo}</p>
                })}
                <div className='todo-btn-container'>
                    <button type = "submit" className='todo-btn' onClick={addTodo} >ADD TODO</button>
                </div>
            </div>
          )
    }
  


export default Todos;