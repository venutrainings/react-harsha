import React, {useContext} from 'react';

import {contextnum} from '../App'

import Display3 from './Display3'




 function Display2(){

     let data = useContext(contextnum)

     console.log(data)

     return(

         <div className='container'>

            <p>Entered the 3rd Component</p>

            <p>Now Displaying the table content after Fetching the data</p>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>POST_ID</th>

                        <th>NAME</th>

                        <th>EMAIL</th>

                        <th>BODY</th>

                    </tr>

                </thead>

                <tbody>

                    {data.map(each=>

                        <Display3 comments={each} key={each.id}/>

                        )}

                </tbody>



            </table>

         </div>

     )

 }

 export default Display2