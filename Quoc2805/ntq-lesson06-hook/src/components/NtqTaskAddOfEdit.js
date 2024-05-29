import React, {useState} from 'react'

export default function NtqTaskAddOfEdit({ntqOnSubmit}) {
    const ntqTask0bj = {
        ntq_taskId:0,
        ntq_taskName: "",
        ntq_level:""
    }
    const [ntqTask , setNtqTask] = useState(ntqTask0bj);
    const ntqHandleChange = (ntqEvent)=>{
        let name = ntqEvent.target.name;
        let value = ntqEvent.target.value;

        setNtqTask(prev =>{
            return{
                ...prev,
            [name]:value,
            }
        })
    }
    const ntqHandleSubmit = (ntqEvent) =>{
        ntqEvent.preventDefault();
        ntqOnSubmit(ntqTask);
    };
  return (
    <div>
        <h2>Thêm mới task</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='ntq_taskId' value={ntqTask.ntq_taskId} onChange={ntqHandleChange} />
            </div>
            <div>
                <label>Task ID</label>
                <input name='ntq_taskName' value={ntqTask.ntq_taskName} onChange={ntqHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='ntq_level' value={ntqTask.ntq_level} onChange={ntqHandleChange} >
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={ntqHandleSubmit}>Ghi lại</button>
        </form>
    </div>
  )
}
