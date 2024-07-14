import axios from '../ntq_api/ntq-2210900119'
import React, { useEffect, useState } from 'react'

export default function NtqFormTableName({renderNtqTableName , onNtqEdit}) {

    const [ntqId,setNtqId] = useState(renderNtqTableName.ntqId)
    const [ntqTbName,setNtqTbName] = useState(renderNtqTableName.ntqTbName)
    const [ntqTbEmail,setNtqTbEmail] = useState(renderNtqTableName.ntqTbEmail)
    const [ntqTbPhone,setNtqTbPhone] = useState(renderNtqTableName.ntqTbPhone)
    const [ntqTbStatus,setNtqTbStatus] = useState(renderNtqTableName.ntqTbStatus)

    useEffect(()=>{
        setNtqId(renderNtqTableName.ntqId)
        setNtqTbName(renderNtqTableName.ntqTbName)
        setNtqTbEmail(renderNtqTableName.ntqTbEmail)
        setNtqTbPhone(renderNtqTableName.ntqTbPhone)
        setNtqTbStatus(renderNtqTableName.ntqTbStatus)
    },[renderNtqTableName])
    const ntqHandleSubmit = async (ntqEvent)=>{
        ntqEvent.preventDefault();
        const ntqObjTableName = {
            "ntqTbName": ntqTbName,
            "ntqTbEmail": ntqTbEmail,
            "ntqTbPhone": ntqTbPhone,
            "ntqTbStatus": ntqTbStatus,
            "ntqId": ntqId          
        }
        console.log(ntqObjTableName);

        //thêm vào dữ liệu trong api
        await axios.put("ntqTableName/"+ntqObjTableName.ntqId,ntqObjTableName);
        onNtqEdit();
    }
  return (
    <div>
        <h2>Form xử lý dữ liệu thông tin</h2>
        <form>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqId">ntqId</span>
            <input type="text" className="form-control" placeholder="Id" 
            name='ntqId'
            value={ntqId}
            onChange={(ntqEv)=>setNtqId(ntqEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqTbName">ntqTbName</span>
            <input type="text" className="form-control" placeholder="Name" 
            name='ntqTbName'
            value={ntqTbName}
            onChange={(ntqEv)=>setNtqTbName(ntqEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqTbEmail">ntqTbEmail</span>
            <input type="text" className="form-control" placeholder="trungquock102@gmail.com" 
            name='ntqTbEmail'
            value={ntqTbEmail}
            onChange={(ntqEv)=>setNtqTbEmail(ntqEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqTbPhone">ntqTbPhone</span>
            <input type="text" className="form-control" placeholder="0369266785" 
            name='ntqTbPhone'
            value={ntqTbPhone}
            onChange={(ntqEv)=>setNtqTbPhone(ntqEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqTbStatus">ntqTbStatus</span>
            <select type="text" id='ntqTbStatus' className="form-control" 
            name='ntqTbStatus'
            value={ntqTbStatus} 
            onChange={(ntqEv)=>setNtqTbStatus(ntqEv.target.value)}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>

        <button className="btn btn-primary my-3" name='btnNtqSave' onClick={ntqHandleSubmit}>Save</button>

        </form>
    </div>
  )
}
