import React, {useState, Component } from 'react';
import './App.css';
import UserInput from './input/UserInput'
import UserOutput from './input/UserOutput'

class App extends Component{
  state = {
    username : "Maxii!!!"
  }
    
  userCHangeHandler = (event) =>
{
    this.setState({
      username : event.target.value
    })
}

  render(){
    return(
       <div>
         <UserInput changed={this.userCHangeHandler} 
         newName= {this.state.username}/>
         <UserOutput userName={this.state.username} 
         newName= {this.state.username}/>
         <UserOutput userName={this.state.username}
         newName= {this.state.username} />
         <UserOutput userName={this.state.username} />
      </div>
    )
  }
}

export default App;
