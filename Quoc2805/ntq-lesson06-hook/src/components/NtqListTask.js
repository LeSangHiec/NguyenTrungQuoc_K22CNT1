  import React from 'react'

  export default function NtqListTask({ renderNtqListTasks, onNtqEdit ,onNtqDelete }) {
    console.log(renderNtqListTasks);
    // Hàm xử lý dữ liệu khi edit
    const ntqHandleEdit = (task) => {
      console.log("edit:", task);
      // Chuyển đổi dữ liệu trên app
      onNtqEdit(task);
    }
    const ntqHandleDelete = (taskId) => {
      // Gọi hàm xử lý xóa từ props
      onNtqDelete(taskId);
    }
  
    // Render data
    let ntqElementTask = renderNtqListTasks.map((task, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{task.ntq_taskId}</td>
          <td>{task.ntq_taskName}</td>
          <td>{task.ntq_task_level}</td>
          <td>
          <button className='btn btn-success' onClick={() => ntqHandleEdit(task)}>Edit</button>
            <button className='btn btn-danger' onClick={() => ntqHandleDelete(task.ntq_taskId)}>Remove</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h2>Danh sách các nhiệm vụ</h2>
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
    );
  }
