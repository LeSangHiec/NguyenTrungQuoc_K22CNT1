import React from 'react'

export default function NtqListTableName({renderNtqListTableName, onNtqDelete, onNtqEdit}) {
  console.log("List:",renderNtqListTableName)
  // hien thi du lieu
  const ntqElementTableName = renderNtqListTableName.map((ntqItem,ntqIndex)=>{
    return(
      <tr key={ntqIndex}>
        <td>{ntqItem.ntqId}</td>
        <td>{ntqItem.ntqTbName}</td>
        <td>{ntqItem.ntqTbEmail}</td>
        <td>{ntqItem.ntqTbPhone}</td>
        <td>{(ntqItem.ntqTbStatus === true || ntqItem.ntqTbStatus==="true")?"Active":"Non-Active"}</td>
        <td>
          <button className='btn btn-success m-2'
              onClick={(ev)=>ntqHandleEdit(ntqItem)}
              >ntq-edit</button>
          <button className='btn btn-danger'
           onClick={(ev)=>ntqHandleDelete(ntqItem.ntqId)}
           >ntq-delete</button>
        </td>
      </tr>
    );
  })

  // Su kien xoa
  const ntqHandleDelete = async (ntqId)=>{
    if(window.confirm("Bạn có muốn xóa dữ liệu có ntqId không?" + ntqId)){
      onNtqDelete(ntqId);
    }    
  }
  const ntqHandleEdit=(ntqObjTableName)=>{
    onNtqEdit(ntqObjTableName);
  }
  
  return (
    <div>
      <h2>Danh sách thông tin</h2>
      <hr/> 
      <tablev className = 'table table-bordered'>
        <thead>
          <tr>
            <th>ntqId</th>
            <th>ntqTbName</th>
            <th>ntqTbEmail</th>
            <th>ntqTbPhone</th>
            <th>ntqTbStatus</th>
            <th>ntq: Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {ntqElementTableName}
        </tbody>
      </tablev>
    </div>
  )
}
