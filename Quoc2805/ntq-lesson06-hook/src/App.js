import './App.css';
import { useState } from 'react';
import NtqListStudent from './components/NtqListStudent';
import NtqStudentAddOrEdit from './components/NtqStudentAddOrEdit';

function App() {
  const ntq_listStudents = [
    { ntq_Id:2210900119, ntq_StudentName:"NguyenTrungQuoc", ntq_age:21,ntq_isActive: true},
    { ntq_Id:1, ntq_StudentName:"Le Tinh Tinh", ntq_age:19,ntq_isActive: false},
    { ntq_Id:2, ntq_StudentName:"Nguyễn Hữu Hào",ntq_age:18,ntq_isActive: true},
    { ntq_Id:3, ntq_StudentName:"Nguyen Trung Phúc",ntq_age:19,ntq_isActive: false},
    { ntq_Id:4, ntq_StudentName:"Dao Linh Tinh",ntq_age:19,ntq_isActive: true},
   ];
   const ntqStudentObj = { 
    ntq_Id: 0,
    ntq_StudentName:"",
    ntq_age:"",
}
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const [ntqListStudent, setNtqListStudent] = useState(ntq_listStudents);
   const [StudentEdit, setStudentEdit] = useState(ntqStudentObj);
   const [isEdit, setIsEdit] = useState(false);

   const ntqHandleSubmit = (ntqParam) => {
      console.log("App:", ntqParam);
     
      if(isEdit){
        const updatedData = ntqListStudent.map((element) => {
          if (element.ntq_Id === ntqParam.ntq_Id) {
            return { ntq_Id: ntqParam.ntq_Id,ntq_StudentName:ntqParam.ntq_StudentName , ntq_age: ntqParam.ntq_age }; // Cập nhật phần tử với tên mới
          }
          return element; // Trả về phần tử ban đầu cho các ID khác
        });
        setNtqListStudent(updatedData);
        setIsEdit(false);
        setStudentEdit(ntqStudentObj)
      } else {
        setNtqListStudent(prev => {
          return[
            ...prev,
            ntqParam
          ]
        })
      }
   }
   const removeItem = (id) => {
    console.log("id:", id);

    const updatedData = ntqListStudent.filter((element) => element.ntq_Id !== id);
    setNtqListStudent(updatedData)
   }
   const editItem = (Student) => {
    console.log("Student:", Student);
    setStudentEdit(Student)
    setIsEdit(true)
   }
  return (
    <div className="container border">
      <h1>Nguyen Trung Quoc - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sách list Student*/}
        <NtqListStudent renderNtqListStudents = {ntqListStudent} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div>
        <NtqStudentAddOrEdit ntqOnSubmit={ntqHandleSubmit} StudentEdit={StudentEdit} isEdit={isEdit}/>
      </div>
    </div>
    
  );
}

export default App;