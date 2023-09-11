import { useState } from 'react';
import './App.css';
import Person from './components/Person';
import persons from './Data/Persons'

function App() {


  return (
    <div className="App">
      {persons.map((person) => {
        return <h1>{person.firstName}</h1>
      })}
    </div>
  );
}

export default App;
