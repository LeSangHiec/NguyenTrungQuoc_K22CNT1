import React from 'react'

export default function NtqListUsers({rendetNtqListUSers}) {
    console.log("NtqListUsers:",rendetNtqListUSers);
    let ntqElementUser = rendetNtqListUSers.map((ntqUser,index)=>{
        return(
            <>
                <tr>
                    <td>{ntqUser.id}</td>
                    <td>{ntqUser.Username}</td>
                    <td>{ntqUser.Password}</td>
                    <td>{ntqUser.Email}</td>
                    <td>{ntqUser.Phone}</td>
                    <td>
                        Edit / Delete
                    </td>
                </tr>
            </>
        ) 
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>chức năng</th>
                </tr>
            </thead>
            <tbody>
                    {ntqElementUser}
            </tbody>
        </table>
        </div>
    </div>
  )
}
