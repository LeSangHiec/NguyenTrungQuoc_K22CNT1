import React, { useEffect, useState } from 'react'

export default function NtqUserEffect() {
    const [count , setCount] = useState(0);

    // Hàm xử lý sự kiện click me
    const ntqHandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // Sử dụng hàm useEffect để cập nhật lại title, có 1 tham số
    useEffect(()=>{
        document.title += `Nguyễn Trung Quốc : You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    //useEffect : tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên = một lần")
    },[]);
    // [deps]
    useEffect(()=> {
        console.log(`useEffect count click:`, count)
    },[count])
  return (
    <div>
        <h2>Demo - UseEffect: You clicked {count} times</h2>
        <button onClick={ntqHandleClick}>
        Click me
      </button>
    </div>
  )
}
