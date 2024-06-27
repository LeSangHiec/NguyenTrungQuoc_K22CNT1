import './App.css';
import NtqListUsers from './components/NtqListUsers';
import axios from './api/ntqApi'
import { useEffect, useState } from 'react';

function NtqApp() {

  const [ntqListUsers,setNtqListUsers] = useState([]);

  const ntqGetAllUsers = async ()=>{
    const ntqResponse = await axios.get("ntqUsers");
    console.log("Api Data:",ntqResponse.data)
    setNtqListUsers(ntqResponse.data)
  }

  useEffect(()=>{
    ntqGetAllUsers("State Data:",ntqListUsers);
  },[])

  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center my-3'>API</h1>
      <hr/>
      <NtqListUsers rendetNtqListUSers={ntqListUsers}/>
    </div>
  );
}

export default NtqApp;
