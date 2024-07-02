
import './App.css';
import NtqListUsers from './components/NtqListUsers';
import axios from './api/ntqApi'
import { useEffect, useState } from 'react';
import NtqFormAddOrEdit from './components/NtqFormAddOrEdit';
function NtqApp() {
  
  const [ntqListUsers,setNtqListUsers] = useState([]);

  // đọc dữ liệu từ api
  const ntqGetAllUsers = async  ()=>{
    const ntqResponse = await axios.get("ntqUsers");
    console.log("Api Data:",ntqResponse.data);
    setNtqListUsers(ntqResponse.data)
  }

  
  useEffect(()=>{
    ntqGetAllUsers();
    console.log("State Data:",ntqListUsers);
  },[])

  const [ntqAddOrEdit, setNtqAddOrEdit] = useState(false);
  const ntqInitUser = {
      UserName: "Nguyễn Trung Quốc",
      Password: "24/10/2004",
      Email: "trungquock102@gmail.com",
      Phone: "1230881729",
      id: "2210900119"
  }
  const [ntqUser, setNtqUser] = useState(ntqInitUser);

  // Hàm xử lý nút thêm mới
  const ntqHandleAddNew = ()=>{
    setNtqAddOrEdit(true);
  }
  const ntqHandleClose=(param)=>{
    setNtqAddOrEdit(param);
  }
  const ntqHandleSubmit =(param)=>{
    ntqGetAllUsers();
    setNtqAddOrEdit(param);
  }
  const ntqHandleDelete=()=>{
    ntqGetAllUsers();
  }
  let ntqElementForm = ntqAddOrEdit===true?
      <NtqFormAddOrEdit renderUsers={ntqUser} 
                        onNtqClose={ntqHandleClose}
                        onNtqSubmitForm={ntqHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <NtqListUsers  renderNtqListUsers={ntqListUsers} onNtqDelete={ntqHandleDelete}/>
        <button className='btn btn-primary' name='btnNtqThemMoi' onClick={ntqHandleAddNew}>Thêm mới</button>
        <hr/>
        {ntqElementForm}
    </div>
  );
}

export default NtqApp;
