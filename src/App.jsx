import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import styles from './Components/task.module.css';

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved){
      setTasks(JSON.parse(saved))
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  const addTask = (newTask) => {
    const dateTime = new Date().toLocaleString();
    const taskWithDateTime = { ...newTask, dateTime };
    setTasksAndSave([...tasks, taskWithDateTime]);
  };

  const deleteTask = (id) => {
    setTasksAndSave(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasksAndSave(
      tasks.map((task) =>
        task.id === id ? { ...task, title: updatedTask } : task
      )
    );
  };

  const toggleTaskStatus = (id) => {
    setTasksAndSave(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteAllTasks = () => {
    setTasksAndSave([]);
  };

  const finishAllTasks = () => {
    setTasksAndSave(
      tasks.map((task) => ({
        ...task,
        completed: true,
      }))
    );
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTaskStatus={toggleTaskStatus}
      />
      <div className={styles.dividerMain}/>
      <button className={styles.deleteAll} onClick={deleteAllTasks}>Delete All Tasks</button>
      <div className={styles.divider}/>
      <button className={styles.finishAll} onClick={finishAllTasks}>Mark All as Finished</button>
    </div>
  );
}

export default App;
