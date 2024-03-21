import React from 'react';
import Task from './Task';
import styles from './tasklist.module.css';

function TaskList({ tasks, deleteTask, updateTask, toggleTaskStatus }) {
  const tasksQuantity = tasks.length;

  return (
    <section className={styles.tasks}>
    <header className={styles.header}>
    <h1>To-Do List</h1>
      <div>
        <p>Created tasks</p>
        <span>{tasksQuantity}</span>
      </div>
    </header>

    <div className={styles.list}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </div>
    </section>
  );
}

export default TaskList;
