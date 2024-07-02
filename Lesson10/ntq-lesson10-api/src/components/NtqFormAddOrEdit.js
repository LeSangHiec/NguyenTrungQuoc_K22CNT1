import axios from '../api/ntqApi'
import React, { useEffect, useState } from 'react'

export default function NtqFormAddOrEdit({onNtqClose, onNtqSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [ntqId, setNtqId] = useState(0);
    const [ntqUserName, setNtqUserName] = useState("");
    const [ntqPassword, setNtqPassword] = useState("");
    const [ntqEmail, setNtqEmail] = useState("");
    const [ntqPhone, setNtqPhone] = useState("");

    useEffect(()=>{
        setNtqId(renderUsers.id)
        setNtqUserName(renderUsers.UserName)
        setNtqPassword(renderUsers.Password)
        setNtqEmail(renderUsers.Email)
        setNtqPhone(renderUsers.Phone)
    },[renderUsers])


    const ntqHandleClose = ()=>{
        onNtqClose(false);
    }

    const ntqHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(ntqId,ntqUserName,ntqPassword,ntqEmail,ntqPhone);
        // post -> api
        let ntqObjUser = {
            UserName: ntqUserName,
            Password: ntqPassword,
            Email: ntqEmail,
            Phone: ntqPhone,
            id: ntqId
        }
        const ntqRes = await axios.post("ntqUsers",ntqObjUser);

        onNtqSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={ntqId} onChange={(ev)=>setNtqId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={ntqUserName} onChange={(ev)=>setNtqUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={ntqPassword} onChange={(ev)=>setNtqPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={ntqEmail} onChange={(ev)=>setNtqEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={ntqPhone} onChange={(ev)=>setNtqPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnNtqSave' onClick={(ev)=>ntqHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={ntqHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
