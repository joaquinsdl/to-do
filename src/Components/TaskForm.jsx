import React, { useState } from 'react';
import styles from './taskform.module.css';
import todoLogo from '../assets/todoLogo.svg';
import { BsPlusCircle } from "react-icons/bs";


function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ id: Date.now(), title: task, completed: false });
    setTask('');
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
        type="text"
        placeholder="Add new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
        <button>Add Task <BsPlusCircle  size={20}/> </button>
      </form>
      </header>
  );
}

export default TaskForm;
