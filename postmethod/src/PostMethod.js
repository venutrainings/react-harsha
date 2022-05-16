import React, { useEffect, useState } from 'react'

import "./PostMethod.css"

function PostMethod() {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState({ name: '', email: '', gender: '', status: '' })

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        fetchData('https://gorest.co.in/public/v2/users')
    })

    function postNow(url,inputData){
        let options= {
            method:"POST",
            headers : {
                'Content-Type' : 'application/json',
                Accept : 'application/json',
                Authorization : 'Bearer 1e27d9780b0a9895ede8521260b7e520bbb23725468f392613d17c1d97bc3c45'
            },
            body : JSON.stringify(inputData)
        }
        fetch(url,options);
        setInputData({
            name : "",
            email:"",
            gender:"",
            status:""
        })
    }

    function postData(e){
        e.preventDefault()
        postNow('https://gorest.co.in/public/v2/users',inputData)
    }

    return (
        <div className='bg-container'>
            <div>
                <form className='form-container' onSubmit={postData}>
                    <label className='label-element' id = "name">Name</label>
                    <input value={inputData.name} className='input-element' htmlFor = "name" onChange={(e) => setInputData({ ...inputData, name: e.target.value })} placeholder='Enter Name Here' />
                    
                    <label className='label-element' id = "email">Email</label>
                    <input value={inputData.email} className='input-element' htmlFor = "email" onChange={(e) => setInputData({ ...inputData, email: e.target.value })} placeholder='Enter Email Here' />
                    
                    <label className='label-element' id = "gender">Gender</label>
                    <input value={inputData.gender} className='input-element' htmlFor = "gender" onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} placeholder='Enter Gender Here' />
                    
                    <label className='label-element' id = "status">Status</label>
                    <input value={inputData.status} className='input-element' htmlFor = "status" onChange={(e) => setInputData({ ...inputData, status: e.target.value })} placeholder='Enter Status Here' />
                    
                    <button className='submit-btn' type='submit'>submit</button>
                </form>
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((each,index) => (
                            <tr key = {index}>
                                <td>{each.name}</td>
                                <td>{each.email}</td>
                                <td>{each.gender}</td>
                                <td>{each.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PostMethod