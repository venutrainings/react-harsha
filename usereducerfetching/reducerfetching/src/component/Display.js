import React from 'react'

export default function Display (props) {
    const {userDetails} = props;
    const {id,name} = userDetails;
    console.log(userDetails)
  return (
    <div>
        <h1>
            {id}
        </h1>
        <h1>
            {name}
        </h1>
    </div>
  )
}
