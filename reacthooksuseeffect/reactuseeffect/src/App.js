import {useState} from "react";

import UseEffectHooks from "./component/UseEffectHooks/useEffectHooks";

import "./App.css"

function App(){
  const [data,setData] = useState({
    id : "",
    post_id:"",
    name:"",
    email: "",
    body : ""
  })
  const [form,setForm] = useState([])
  const [show,setShow] = useState(false)
  // useEffect(() => {
  //   fetch("https://gorest.co.in/public/v2/comments")
  //   .then(response => response.json())
  //   .then(jsonData => setData(jsonData))
    
  // },[]);

  const dataBtn = () => {
    setShow(true)
  };

  const closeData =() => {
    setShow(false)
  };

  const updateId =(event) => {
    setData(prevData=>({...prevData,id:event.target.value})
    )
  }

  const updatePostId = (event) => {
    setData(prevData => ({...prevData,post_id:event.target.value}))

  }

  const updateEmail = (event) => {
    setData(prevData => ({...prevData,email:event.target.value}))
  }

  const updateName  = (event) => {
    setData(prevData => ({...prevData,name:event.target.value}))
  }

  const updateBody = (event) => {
    setData(prevData => ({...prevData,body:event.target.value}))
  }

  // const submitForm = () => {

  // }

  const onAddDetails = (event) => {
    event.preventDefault()
    setForm(form.push(data))
    
    
    
    
   
  }
// console.log(data)
  return(<>
    <div className="bg-container">
    <h1 className="heading">
      Fetching Data using useState and useEffect
    </h1>
    <form  className="form-container">
      <h1 className="form-heading">
        Add Details
      </h1>

      <div className="input-container">
      
        <label className="label-element" htmlFor="ID">
          ID :
        </label>
        <input onChange={updateId} className="input-element" id = "ID" type = "text" /> 
      

      
        <label className="label-element" htmlFor="ID">
          POST_ID :
        </label>
        <input onChange={updatePostId} className="input-element" id = "ID" type = "text" /> 
      

      
        <label className="label-element" htmlFor="ID">
          NAME :
        </label>
        <input onChange={updateName} className="input-element" id = "ID" type = "text" /> 
      

      
        <label htmlFor="ID">
          EMAIL :
        </label>
        <input onChange={updateEmail} className="input-element" id = "ID" type = "text" /> 
      

      
        <label htmlFor="ID">
          BODY :
        </label>
        <input onChange={updateBody} className="input-element" id = "ID" type = "text" /> 
      



      
      <button onClick={onAddDetails}  className="add-btn">
        ADD DATA
      </button>

      </div>
    </form>
    <div>
    <button onClick={dataBtn} className="data-btn">
      GET DATA
    </button>
    <button onClick = {closeData} className="data-btn"  >
      Close Data
    </button>
    </div>
      {show && <table>
        <thead>
          <tr >
            <th>
              ID
            </th>
            <th>
              POST_ID
            </th>
            <th>
              NAME
            </th>
            <th>
              EMAIL
            </th>
            <th>
              BODY
            </th>
          </tr>
        </thead>
        <tbody>
          
          {form.map(eachData => (
            <UseEffectHooks userData = {eachData} key = {eachData.id} />
          ))}
         
        </tbody>
      </table>}
      
    </div>
    
    </>
  )
}

export default App