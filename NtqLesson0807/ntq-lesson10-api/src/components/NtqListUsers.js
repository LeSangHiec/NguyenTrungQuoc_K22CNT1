import React from 'react'
import axios from '../api/ntqApi'
export default function NtqListUsers({renderNtqListUsers, onNtqDelete}) {
    console.log("NtqListUsers:",renderNtqListUsers);
    // hiener thi đữ liệu
    let ntqElementUser = renderNtqListUsers.map((SinhVien,index)=>{
        return(
                <tr key={index}>
                    <td>{SinhVien.ntqMaSV}</td>
                    <td>{SinhVien.ntqHoSV}</td>
                    <td>{SinhVien.ntqTenSV}</td>
                    <td>{SinhVien.ntqPhai}</td>
                    <td>{SinhVien.ntqNgaySinh}</td>
                    <td>{SinhVien.ntqNoiSinh}</td>
                    <td>{SinhVien.ntqMaKH}</td>
                    <td>{SinhVien.ntqHocBong}</td>
                    <td>{SinhVien.ntqDiemTrungBinh}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>ntqHandleDelete(SinhVien)}> Delete </button>
                        <button className='btn btn-primary' >Edit</button>
                    </td>
                </tr>
        )
    })
 
    const ntqHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const ntqRes = await axios.delete("SinhVien/"+param.ntqMaSV);
        }
        onNtqDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ho</th>
                        <th>Ten</th>
                        <th>Phai</th>
                        <th>Ngày Sinh</th>
                        <th>Nơi Sinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        
                    </tr>
                </thead>
                <tbody>
                {ntqElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
