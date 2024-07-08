import axios from '../api/ntqApi'
import React, { useEffect, useState } from 'react'

export default function NtqFormAddOrEdit({onNtqClose, onNtqSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [ntqMaSV, setNtqMaSV] = useState(0);
    const [ntqHoSV, setNtqHoSV] = useState("");
    const [ntqTenSV, setNtqTenSV] = useState("");
    const [ntqPhai, setNtqPhai] = useState("");
    const [ntqNgaySinh, setNtqNgaySinh] = useState("");
    const [ntqNoiSinh, setNtqNoiSinh] = useState("");
    const [ntqMaKH, setNtqMaKH] = useState("");
    const [ntqHocBong, setNtqHocBong] = useState("");
    const [ntqDiemTrungBinh, setNtqDiemTrungBinh] = useState("");


    useEffect(()=>{
        setNtqMaSV(renderUsers.MaSV)
        setNtqHoSV(renderUsers.HoSV)
        setNtqTenSV(renderUsers.TenSV)
        setNtqPhai(renderUsers.Phai)    
        setNtqNgaySinh(renderUsers.NgaySinh)
        setNtqNoiSinh(renderUsers.NoiSinh)
        setNtqMaKH(renderUsers.MaKH)
        setNtqHocBong(renderUsers.HocBong)
        setNtqDiemTrungBinh(renderUsers.DiemTrungBinh)

    },[renderUsers])


    const ntqHandleClose = ()=>{
        onNtqClose(false);
    }

    const ntqHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(ntqMaSV,ntqHoSV,ntqTenSV,ntqPhai,ntqNgaySinh,ntqNoiSinh,ntqMaKH,ntqHocBong,ntqDiemTrungBinh);
        // post -> api
        let ntqObjUser = {
            ntqMaSV: ntqMaSV,
            ntqHoSV: ntqHoSV,
            ntqTenSV: ntqTenSV,
            ntqPhai: ntqPhai,
            ntqNgaySinh: ntqNgaySinh,           
            ntqNoiSinh: ntqNoiSinh,
            ntqMaKH: ntqMaKH,
            ntqHocBong: ntqHocBong,
            ntqDiemTrungBinh: ntqDiemTrungBinh
        }
        const ntqRes = await axios.post("SinhVien",ntqObjUser);

        onNtqSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="MaSV">MaSV</span>
            <input type="text" class="form-control" 
                name='MaSV' value={ntqMaSV} onChange={(ev)=>setNtqMaSV(ev.target.value)}
                placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" tabIndex="ntqHoSV">ntqHoSV</span>
            <input type="text" class="form-control" 
                name='ntqHoSV' value={ntqHoSV} onChange={(ev)=>setNtqHoSV(ev.target.value)}
                placeholder="ntqHoSV" aria-label="ntqHoSV" aria-describedby="ntqHoSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="TenSV">TenSV</span>
            <input type="TenSV" class="form-control" 
                name='TenSV' value={ntqTenSV} onChange={(ev)=>setNtqTenSV(ev.target.value)}
                placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phai">Phai</span>
            <input type="Phai" class="form-control" 
                name='Phai' value={ntqPhai} onChange={(ev)=>setNtqPhai(ev.target.value)}
                placeholder="Phai" aria-label="Phai" aria-describedby="Phai"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="NgaySinh">NgaySinh</span>
            <input type="number" class="form-control" 
                name='NgaySinh' value={ntqNgaySinh} onChange={(ev)=>setNtqNgaySinh(ev.target.value)}
                placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="NoiSinh">NoiSinh</span>
            <input type="number" class="form-control" 
                name='NoiSinh' value={ntqNoiSinh} onChange={(ev)=>setNtqNoiSinh(ev.target.value)}
                placeholder="NoiSinh" aria-label="Noiinh" aria-describedby="NoiSinh"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="MaKH">MaKH</span>
            <input type="number" class="form-control" 
                name='MaKH' value={ntqMaKH} onChange={(ev)=>setNtqMaKH(ev.target.value)}
                placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="HocBong">MaKH</span>
            <input type="number" class="form-control" 
                name='HocBong' value={ntqHocBong} onChange={(ev)=>setNtqHocBong(ev.target.value)}
                placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="DiemTrungBinh">MaKH</span>
            <input type="number" class="form-control" 
                name='DiemTrungBinh' value={ntqDiemTrungBinh} onChange={(ev)=>setNtqDiemTrungBinh(ev.target.value)}
                placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh"/>
        </div>

        <button className='btn btn-primary' name='btnNtqSave' onClick={(ev)=>ntqHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={ntqHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
