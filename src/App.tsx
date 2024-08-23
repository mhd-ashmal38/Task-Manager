import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import { Task } from './model';
import TaskList from './components/TaskList';

const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    const newTask: Task = {
      id: Date.now(),
      description,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Manager</h1>
        <AddTask addTask={addTask} />
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
