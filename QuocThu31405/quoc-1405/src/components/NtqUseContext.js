import React, { createContext, useContext, useState } from 'react'
import NtqUseContext1 from './NtqUseContext1';
export const ThemeContext = createContext(); // Tạo ngữ cảnh để chia sẻ

export default function NtqUseContext() {
    // state
    const [theme,setTheme] = useState('red');
    
    // Hàm thay đổi Theme
    const ntqHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
    return (
        <ThemeContext.Provider value= {theme}>
            <div  className='alert'>
                <h2>Demo useContext</h2>
                <NtqUseContext1 />
                <button onClick={ntqHandleChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}
