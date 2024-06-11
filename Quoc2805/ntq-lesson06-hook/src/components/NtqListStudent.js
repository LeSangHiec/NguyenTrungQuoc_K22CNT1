import React from 'react';

export default function NtqListStudent({ renderNtqListStudents, removeItem, editItem }) {

    //render data

    let ntqElementStudent = renderNtqListStudents.map((Student, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Student.ntq_Id}</td>
                    <td>{Student.ntq_StudentName}</td>
                    <td>{Student.ntq_age}</td>
                    <td>{}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => editItem(Student)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => removeItem(Student.ntq_Id)}>Remove</button>
                    </td>
                </tr>

            </>
        );
    });

    return (
        <div>
            <h2>Danh sach cac nhiem vu</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student age</th>
                        <th>Active</th>
                    </tr>
                </thead>

                <tbody>
                    {ntqElementStudent}
                </tbody>
            </table>
        </div>
    );
}