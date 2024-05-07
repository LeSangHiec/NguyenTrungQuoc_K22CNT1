import React from 'react'

export default function Func_JSX_NguyenTrungQuoc(props) {
    const users ={
        name:"Nguyen Trung Quoc",
        age: 20
    }
  return (
    <div>
        <h2>Funtion Component Demo</h2>
        <h3>
            Welcome to , {users.name} - {users.age}
        </h3>
        <hr/>
        <h3>Props:
            <br/> FullName: {props.fullname}
            <br/> Age: {props.age}
        </h3>
    </div>
  )
}
