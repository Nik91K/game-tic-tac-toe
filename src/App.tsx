import { useState } from 'react'
import './App.css'

const ToDoItem = ({ taskName, completed }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>{taskName}</span>
      <span className='check'>{completed ? "✅ Completed" : "❌ Not Completed"}</span>
    </div>
  );
};

const App = () => {
  const tasks = [
    { id: 1, taskName: "Learn React", completed: false },
    { id: 2, taskName: "Build a project", completed: true },
    { id: 3, taskName: "Practice JavaScript", completed: false },
    { id: 4, taskName: "Read React documentation", completed: true },
    { id: 5, taskName: "Create a portfolio website", completed: false },
    { id: 6, taskName: "Learn TypeScript", completed: false },
    { id: 7, taskName: "Develop a to-do list app", completed: true },
    { id: 8, taskName: "Watch React tutorial videos", completed: false },
    { id: 9, taskName: "Review project code", completed: true },
    { id: 10, taskName: "Join a coding community", completed: false },
  ]

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>To-Do List</h1>
      {tasks.map((task) => (
      <ToDoItem key={task.id} taskName={task.taskName} completed={task.completed} />
      ))}
  </div>
  );
}

export default App