import React from 'react';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h1 className='text-5xl font-bold text-center'>Task Manager</h1>
      <AddTask/>
    </div>
  );
}

export default App;
