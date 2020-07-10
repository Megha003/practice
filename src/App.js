import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component{
  state = {
     persons : [
    {name : 'Megha', age : 22},
    {name : 'Mon', age : 23}
    ]
  }

  render(){
    return(
      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    )
  }
}

export default App;
