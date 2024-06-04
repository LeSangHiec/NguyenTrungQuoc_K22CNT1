import React, { useEffect, useState } from 'react'

export default function NtqTaskAddOrEdit({ ntqOnSubmit, renderNtqTask, renderNtqAddOrEdit }) {
  console.log("NtqTaskAddOrEdit:", renderNtqTask, renderNtqAddOrEdit);
  // Đối tượng task
  const ntqTaskObj = {
    ntq_taskId: 0,
    ntq_taskName: "",
    ntq_level: ""
  }
  // const [ntqTask, setNtqTask] = useState(ntqTaskObj);
  const [ntqTask, setNtqTask] = useState(renderNtqTask);
  useEffect(() => {
    setNtqTask(renderNtqTask);
  }, [renderNtqTask]);
  console.log("State:", ntqTask);
  // Hàm xử lý thay đổi điều khiển
  const ntqHandleChange = (ntqEvent) => {
    let name = ntqEvent.target.name;
    let value = ntqEvent.target.value;

    setNtqTask(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
    console.log(ntqTask);
  }
  const ntqHandleSubmit = (ntqEvent) => {
    ntqEvent.preventDefault();
    ntqOnSubmit(ntqTask);
  }

  const ntqTitle = renderNtqAddOrEdit === false ? "Thêm mới task:" : "Sửa task";
  return (
    <div>
        <h2>Thêm mới task</h2>
        <form>
            <div className='input-group mb-3'>
                <span className='input-group-text' id="basic-addon1">Task ID</span>
                <input name='ntq_taskId' value={ntqTask.ntq_taskId} onChange={ntqHandleChange} 
                class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id="basic-addon1">Task ID</span>
                <input name='ntq_taskId' value={ntqTask.ntq_taskId} onChange={ntqHandleChange} 
                class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>Task Level</span>
                <select name='ntq_level' value={ntqTask.ntq_level} onChange={ntqHandleChange} class='form-control'
                aria-describedby='basic-addon'>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={ntqHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}
