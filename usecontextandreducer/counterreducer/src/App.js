import React,{useState,useReducer} from 'react'

// import CounterOne from './component/CounterOne'
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';

import "./App.css"

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state,action) => {
    switch(action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset" :
            return initialState
            
        default :
        return state    
    }
}

function App() {
  const [isPositive,setIsPositive] = useState()
const [count,dispatch] = useReducer(reducer,initialState);
// if (count>0){
//   setIsPositive(true)
// }else{
//   setIsPositive(false)
// }

  return (
    <CountContext.Provider value = {{countState : count,countDispatch : dispatch}}>
    <div className='count-container'>
      count : <span className='span-value'>
      {count} 
        </span>       
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  )
}

export default App