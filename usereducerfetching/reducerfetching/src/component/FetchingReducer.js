import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import Display from './Display'

const initialState ={
    isLoading: true,
    error: '',
    post: {}
}

const reducer = (state,action) =>{
    switch(action.type){
        case "fetch_success":
            return {...initialState,isLoading:false,error:'',post:action.payload}
        case "fetch_fail":
            return {...initialState,isLoading:false,post:{},error: 'Something Went Wrong'}
        
        default : return;
    }
}

function FetchingReducer(){
    
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://gorest.co.in/public/v2/users')
        .then(response=>dispatch({type:"fetch_success",payload:response.data}))
        .catch(error=>dispatch({type:'fetch_fail'}))
    },[])

   console.log(state)
    
  
  return (
    <>
        {state.post.map((each)=>{
            return <Display userDetails = {each}/>}
       )}
       {state.error ? state.error :null}
        
    </>
  )
}

export default FetchingReducer;