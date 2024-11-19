import { useState } from 'react';
import './App.css';
import tasks from './json/tasks.json';

const ToDoItem = ({ taskName, completed }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>{taskName}</span>
      <span className='check'>{completed ? "✅ Completed" : "❌ Not Completed"}</span>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>To-Do List</h1>
      {tasks.map((task) => (
        <ToDoItem key={task.id} taskName={task.taskName} completed={task.completed} />
      ))}
    </div>
  );
};

export default App;
