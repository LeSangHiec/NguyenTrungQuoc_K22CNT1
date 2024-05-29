import React from 'react'

export default function NtqListTask({renderNtqListTasks}) {
    console.log(renderNtqListTasks); 

    let ntqElementTask = renderNtqListTasks.map((task, index)=>{
        return (
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.ntq_taskId}</td>
                <td>{task.ntq_taskName}</td>
                <td>{task.ntq_level}</td>
                <td>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
            </>
        )
    })
    return (
    
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {ntqElementTask}
            </tbody>
        </table>
    </div>
  )
}
