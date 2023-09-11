import { useState } from 'react';
import './App.css';
import Person from './components/Person';
import persons from './Data/Persons'

function App() {


  return (
    <div className="App">
      {persons.map((person, index) => {
        return <Person {...person} key={index}/>
      })}
    </div>
  );
}

export default App;
