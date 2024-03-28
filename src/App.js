import React, { useState } from 'react';
import './App.css';

function App() {
// State hook
const [newItem, setNewItem] = useState("");


// Helper Functions 

function addItem() {
  console.log(newItem)
}

  return (
    <div className="App">
      {/*1. Header */}
      <h1>Simple Todo List</h1>

      {/* 2. Input (input along with button) */}
      <input
      type ="text"
      placeholder = 'Add an item'
      onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      {/* 3. Unordered list wiht list items */}
      <ul>
      <li>Do homework</li>
      <li>Study for test</li>
      <li>Hangout with friends</li>
      <li>Water the plants</li>

      </ul>

    </div>
  );
}

export default App;
