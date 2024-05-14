import React from 'react'
import NtqUseState from './components/NtqUseState'
import NtqUserEffect from './components/NtqUserEffect'
import './App.css'
import NtqUseContent from './components/NtqUseContext'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Nguyễn Trung Quốc - Hook</h1>
      <hr/>
      <NtqUseState />
      <hr />
      <NtqUserEffect />
      <hr />
      <NtqUseContent />
    </div>
    
  )
}
