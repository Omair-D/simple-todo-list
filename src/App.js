import React, { useState } from 'react';
import './App.css';

function App() {
// State hook
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);

// Helper Functions 

function addItem() {

  if (!newItem){
    alert("Please Enter an Item.")
    return;
  }
  
  const item = {
    id: Math.floor(Math.random()*1000),
    value: newItem
  };

  setItems(oldList => [...oldList, item]);

  setNewItem("");

  console.log(items);

}

function deleteItem(id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

  return (
    <div className="App">
      {/*1. Header */}
      <h1>What do you have todo?</h1>

      {/* 2. Input (input along with button) */}
      <input
      type ="text"
      placeholder = 'Add an item'
      onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      {/* 3. Unordered list wiht list items */}
      <ul>
      {items.map(item => {
        return(
          <li key={item.id}>{item.value}<button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button></li>
        ) 
    })}

      </ul>

    </div>
  );
}

export default App;
