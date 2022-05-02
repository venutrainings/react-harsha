import {useState,useEffect} from "react";

import UseEffectHooks from "./component/UseEffectHooks/useEffectHooks";

import "./App.css"

function App(){
  const [data,setData] = useState({
  
  })
  const [show,setShow] = useState(false)
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/comments")
    .then(response => response.json())
    .then(jsonData => setData(jsonData))
    
  },[]);

  const dataBtn = () => {
    setShow(true)
  };

  const closeData =() => {
    setShow(false)
  };

  
  // const submitForm = () => {

  // }

  
// console.log(data)
  return(<>
    <div className="bg-container">
    <h1 className="heading">
      Fetching Data using useState and useEffect
    </h1>
    
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
          
          {data.map(eachData => (
            <UseEffectHooks userData = {eachData} key = {eachData.id} />
          ))}
         
        </tbody>
      </table>}
      
    </div>
    
    </>
  )
}

export default App