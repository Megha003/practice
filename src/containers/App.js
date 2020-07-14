import React, {useState, Component } from 'react';
import './App.css';
import Char from './Char/Char'
import Validate from './Validate/Validate';

class App extends Component{
  state = {
    userName: ""
  }
    
  userCHangeHandler = (event) =>
{
    this.setState({
      userName : event.target.value
    })
}

  deleteHandler = (index) =>{
    const del = this.state.userName.split('')
    del.splice(index, 1);
    const updatedlist = del.join('');
    this.setState({
       userName : updatedlist
    });
  }

  render(){
    const charlist = this.state.userName.split('').map((ch,index ) => {
      return <Char character={ch} key ={index}  clicked={() => this.deleteHandler(index)}/>
    });
    return(
       <div>
        <input type="text" onChange= {this.userCHangeHandler} value={this.state.userName}/>
      {/* <p>{this.state.userName}</p> */}
      <Validate inputlength={this.state.userName.length}/>
      {charlist}
      </div>
    )
  }
}

export default App;
