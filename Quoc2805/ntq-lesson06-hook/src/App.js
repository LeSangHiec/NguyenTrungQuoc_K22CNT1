import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NtqListTask from './components/NtqListTask';
import NtqTaskAddOfEdit from './components/NtqTaskAddOfEdit';

function App() {
  const ntq_listTasks = [
    { ntq_taskId:2210900119, ntq_taskName:"Nguyễn Trung Quốc", ntq_level:"Small" },
    { ntq_taskId:1, ntq_taskName:"Học lập trình frontend", ntq_level:"Small" },
    { ntq_taskId:2, ntq_taskName:"Học lập trình reactjs",ntq_level:"Medium"},
    { ntq_taskId:3, ntq_taskName:"Lập trình với Frontend - Reactjs",ntq_level:"High"},
    { ntq_taskId:4, ntq_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",ntq_level:"Small"},
   ];
   //sử dụng hàm useState để  lưu trữ trạng thái dữ liệu
   const [ntqListTasks , setNtqListTasks] = useState(ntq_listTasks);

   const ntqHandleSubmit = (ntqParam)=>{
    console.log("App:",ntqParam);
    setNtqListTasks(prev => {
      return{
        ...prev,
        ntqParam  
      }
    })
   }
  return (
    <div className="container border">
      <h1>Nguyễn Trung Quốc - K22CNT1</h1>
      <hr />
      <div> 
        <NtqListTask renderNtqListTasks = {ntqListTasks} />
      </div>
      <div>
      <NtqTaskAddOfEdit ntqOnSubmit={ntqHandleSubmit} />

      </div>
    </div>
  );
}

export default App;
