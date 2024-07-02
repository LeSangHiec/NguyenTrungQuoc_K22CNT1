import React from 'react'
import axios from '../api/ntqApi'
export default function NtqListUsers({renderNtqListUsers, onNtqDelete}) {
    console.log("NtqListUsers:",renderNtqListUsers);
    // hiener thi đữ liệu
    let ntqElementUser = renderNtqListUsers.map((ntqUser,index)=>{
        return(
                <tr key={index}>
                    <td>{ntqUser.id}</td>
                    <td>{ntqUser.UserName}</td>
                    <td>{ntqUser.Password}</td>
                    <td>{ntqUser.Email}</td>
                    <td>{ntqUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>ntqHandleDelete(ntqUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const ntqHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const ntqRes = await axios.delete("ntqUsers/"+param.id);
        }
        onNtqDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
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
