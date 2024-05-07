import React, { Component } from 'react';

 export default  class NTQ_EventForm1 extends Component {

    //Hàm xử lý sự kiện 
     eventHandleCLick1 = ()=>{
        alert("event handle 1")
     }
     eventHandleCLick2 = ()=>{
        alert("event Click 2")
     }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* gọi hàm xử lý sự kiện sau khi render */}
        {/* <button onClick={this.eventHandleCLick1()}>Click 1</button> */}
        {/* gọi hàm xử lý khi click */}
        <button onClick={this.eventHandleCLick2}>Click 2</button>
      </div>
    )
  }
}
