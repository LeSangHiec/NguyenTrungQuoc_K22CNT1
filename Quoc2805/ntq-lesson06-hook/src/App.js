import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import NtqListTask from './components/NtqListTask';
import NtqTaskAddOrEdit from './components/NtqTaskAddOrEdit';

function App() {
  //Mock data
  const ntq_listTasks = [
    {
      ntq_taskId: 2201234,
      ntq_taskName: "Nguyễn Trung Quốc",
      ntq_level: "Small",
    },
    {
      ntq_taskId: 1,
      ntq_taskName: "Học lập trình frontend",
      ntq_level: "Small",
    },
    {
      ntq_taskId: 2,
      ntq_taskName: "Học lập trình reactjs",
      ntq_level: "Medium",
    },
    {
      ntq_taskId: 3,
      ntq_taskName: "Lập trình với Frontend - Reactjs",
      ntq_level: "High",
    },
    {
      ntq_taskId: 4,
      ntq_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      ntq_level: "Small",
    },
];

let data = JSON.parse(localStorage.getItem("NtqK22CNT1DataTasks"));
if (data === null || data.length === 0) {
    data = ntq_listTasks;
    localStorage.setItem("NtqK22CNT1DataTasks", JSON.stringify(data));
}

// sử dụng hàm useState để lưu trữ trạng thái dữ liệu
const [ntqListTasks, setNtqListTasks] = useState(data);

  
useEffect(() => {
    localStorage.setItem("NtqK22CNT1DataTasks", JSON.stringify(ntqListTasks));
}, [ntqListTasks]);

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const ntqHandleSubmit = (ntqParam) => {
    if (ntqAddOrEdit === false) {
      // khi thêm mới
      setNtqListTasks((prev) => {
        return [...prev, ntqParam];
      });
    } else {
      // submit khi sửa
      for (let i = 0; i < ntqListTasks.length; i++) {
        if (ntqListTasks[i].ntq_taskId == ntqParam.ntq_taskId) {
          ntqListTasks[i] = ntqParam;
        }
      }
      setNtqListTasks((prev) => {
        return [...prev];
      });
    }
  };
  // ham xu ly đón dữ liệu sửa
  const handleDelete = (taskId) => {
    setNtqListTasks((prev) => prev.filter((task) => task.ntq_taskId !== taskId));
  };

  // lữu trữ state
  const task = { ntq_taskId: 0, ntq_taskName: "HD", ntq_level: "small" };
  const [ntqTask, setNtqTask] = useState(task); // dùng để render form
  // quản lí form khi thêm / sửa
  const [ntqAddOrEdit, setNtqAddOrEdit] = useState(false); // Them 
  const HandleEdit = (param) => {
    setNtqTask(param);
    setNtqAddOrEdit(true);
  };
  return (
    <div className="container-border">
      <h1>Nguyen Trung Quoc</h1>
      <hr />
      <div>
        {/*Danh sach list task*/}
        <NtqListTask renderNtqListTasks={ntqListTasks}
                     onNtqEdit={HandleEdit}
                     onNtqDelete={handleDelete} />
      </div>
      <div>
        <NtqTaskAddOrEdit ntqOnSubmit={ntqHandleSubmit}
                          renderNtqAddOrEdit={ntqAddOrEdit}
                          renderNtqTask={ntqTask} />
      </div>
    </div>
  );
}

export default App;
