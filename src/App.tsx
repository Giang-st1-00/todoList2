import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todolist />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
