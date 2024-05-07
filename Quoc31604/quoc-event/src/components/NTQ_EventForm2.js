import React from 'react'

export default function NTQ_EventForm2() {
    // Định nghĩa các hàm xử lý sự kiện
    const eventHandleCLick1 = (content)=>{
        console.log("=====================================");
        console.log(content);
        console.log("=====================================");
    }
  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Function Component</h2>
        <button onClick={eventHandleCLick1("Nguyễn Trung Quốc")}>Gọi khi render</button>
        <button onClick={()=>eventHandleCLick1("K22CNT1-ReactJs")}>Gọi khi click</button>
    </div>
  )
}
