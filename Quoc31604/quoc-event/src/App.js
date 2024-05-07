import React, { Component } from 'react';
import NTQ_EventForm1  from './components/NTQ_EventForm1';
import  NTQ_EventForm2 from './components/NTQ_EventForm2';
import  NTQ_EventForm3 from './components/NTQ_EventForm3';
import  NTQ_EventForm4 from './components/NTQ_EventForm4';

 export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Quoc</h1> 
        <NTQ_EventForm1 />    
        <NTQ_EventForm2 />   
        <NTQ_EventForm3 />
        <NTQ_EventForm4 />
      </div>
    );
  }
}
