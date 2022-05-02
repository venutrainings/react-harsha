import React, {useState,useEffect} from 'react'

import Display1 from './component/Display1'

import './App.css';



export const contextnum = React.createContext()



function App() {

  const [employee,setEmployee] = useState([])



  useEffect(()=>{ fetch('https://gorest.co.in/public/v2/comments')

  .then(response=>response.json())

  .then(json=>setEmployee(json))

},[])

return (

  <contextnum.Provider value={employee}>

          <h1 className='heading'>Fetching Data and Displaying it using useContext() Hooks</h1>



    <p>Entered the 1st Component and Fetching the data has done successfully</p>

    <Display1 />

  </contextnum.Provider>

)  



}



export default App;