import axios from './ntq_api/ntq-2210900119'
import React, { useEffect, useState } from 'react'
import NtqListTableName from  './ntq_components/NtqListTableName'
import NtqFormTableName from './ntq_components/NtqFormTableName'


export default function NtqApp() {
  // doc du lieuj tu api
  const [ntqListTableName, setNtqListTableName] = useState([])
  const ntqGetTableName = async ()=>{
    let ntqResp = await axios.get("ntqTableName ")
    console.log("App List:",ntqResp.data);
    setNtqListTableName(ntqResp.data)
  }

  useEffect(()=>{
    ntqGetTableName()
  },[])

  // Ham xoa
  const ntqHandleDelete= async (ntqId)=>{
    let ntqRes = await axios.delete("ntqTableName/"+ntqId);
    ntqGetTableName();
  }

  const  ntqObjTableName = { 
    "ntqTbName": "Quốc",
    "ntqTbEmail": "trungquock102@gmail.com",
    "ntqTbPhone": "00122938192",
    "ntqTbStatus": true,
    "ntqId": "2210900119"
  };
  const [ntqTableName,setNtqTableName] = useState(ntqObjTableName);
  
  //const ntqHandleAdd = ()=>{
  //  ntqGetTableName();
  //}
  
  const ntqHandleEdit1 = ()=>{
    ntqGetTableName();
  }
  const ntqHandleEdit = (ntqObjEditTableName)=>{
    setNtqTableName(ntqObjEditTableName);
  }
  return (
    <div className='container bordeer my-3'>
      <h1>Bài đánh giá hết học phần - Nguyễn Trung Quốc - 2210900119</h1>
      <hr/>
      <NtqListTableName renderNtqListTableName = {ntqListTableName} 
                                                  onNtqDelete={ntqHandleDelete}
                                                  onNtqEdit={ntqHandleEdit}/>
      <hr/>
      <NtqFormTableName renderNtqTableName = {ntqTableName}  
                                                  onNtqEdit={ntqHandleEdit1}/>
    </div>
  )

}

