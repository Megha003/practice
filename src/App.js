import React, {useState } from 'react';
import './App.css';
import Person from './Person';

const App = props => {
  const [ personsState , setpersonsState] = useState( {
     persons : [
    {name : 'Megha', age : 22},
    {name : 'Mon', age : 23}
    ]
  });

const [otherState , setotherState] = useState('some values');
console.log(personsState , otherState);
const switchHandler = () => {
  setpersonsState({
  persons : [
    { name : 'Mon' , age : 23},
    { name : 'Megha' , age : 22}
  ]
  });
};  

    return(
      <div>
        <button onClick={switchHandler}>Switch Name</button> 
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      </div>
    )
  }

export default App;
