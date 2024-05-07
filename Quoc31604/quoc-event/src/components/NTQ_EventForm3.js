import React, { Component } from 'react'
// Xử lý sự kiện với props, state

export default class NTQ_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tạo đối tượng dữ liệu thông qua state
        this.state = {
            name:"Nguyễn Trung Quốc",
            job: "Pirate King"
        }
    }
    // hàm thay đổi sự kiện
    handleChangeName = (event)=>{
        this.setState({
            name:"K22CNt1-ReactJs"
        })
    }
    handleChangeJob = (event)=>{
        this.setState({
            name:"Khoa học máy tính",
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong sate</h2>
        <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name </button>
        <button onClick={this.handleChangeJob}>Thay đổi job </button>
      </div>
    )
  }
}
