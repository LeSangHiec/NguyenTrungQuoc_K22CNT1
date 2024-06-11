import React, { useEffect, useState } from 'react';

export default function NtqStudentAddOrEdit({ ntqOnSubmit, StudentEdit, isEdit }) {
    // Doi tuong Student
    
    const [ntqStudent, setNtqStudent] = useState(StudentEdit);
    
    useEffect(() => {
        setNtqStudent(StudentEdit);
    }, [StudentEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const ntqHandleChange = (ntqEvent) => {
        let name = ntqEvent.target.name;
        let value = ntqEvent.target.value;
        
        setNtqStudent(prev => {
            return{
                ...prev,
                [name]: value,
            }
        })
    }

    const ntqHandleSubmit = (ntqEvent) => {
        ntqEvent.preventDefault();
        ntqOnSubmit(ntqStudent);
    }
    
    return (
        <div>
            <h2>{isEdit ? 'Update Student' : 'Them moi Student'}</h2>
            <form>
                <div>
                    <span className='input-group-text' id='basic-addon1'>Student ID</span>
                    <input name='ntq_Id' value={ntqStudent.ntq_Id} onChange={ntqHandleChange}/>
                </div>
                <div>
                    <label>Student Name</label>
                    <input name='ntq_StudentName' value={ntqStudent.ntq_StudentName} onChange={ntqHandleChange}/>
                </div>
                <div>
                    <label> age</label>
                    <input name='ntq_age' value={ntqStudent.ntq_age} onChange={ntqHandleChange}/>
                </div>
                <div className="form-group mb-3">
            <label>Hoạt động:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name='ntqIsActive'
                checked={ntqStudent.IsActive}
                onChange={ntqHandleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
                <button onClick={ntqHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}