import React, {useState, Component } from 'react';
import '../input/UserInputCss.css';

const UserInput = (props) =>{

    return(
      <div>
            
        <input className="userinput"
        onChange ={props.changed} 
        type="text"
        value={props.newName}></input>
      </div>
    )
  }


export default UserInput;
