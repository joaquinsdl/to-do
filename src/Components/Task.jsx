import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsFillCheckCircleFill, BsTrash } from 'react-icons/bs';
import styles from './task.module.css';

function Task({ task, deleteTask, updateTask, toggleTaskStatus }) {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, editedTask);
    setEditing(false);
  };

  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  const confirmDelete = () => {
    setShowModal(true);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setShowModal(false);
  };

  return (
    <div>
      {editing ? (
        <div className={styles.task}>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className={styles.modalButtons} onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className={styles.task}>
          <button className={styles.checkContainer} onClick={handleToggleStatus}>
          {task.completed ? <BsFillCheckCircleFill /> : <div />}
          </button>

          <p className={task.completed ? styles.textCompleted : ""}>
          {task.title} - {task.dateTime}
          </p>
          
          <button className={styles.editButton} onClick={handleEdit}>
            <FaEdit size={20}/>
          </button>

          <button className={styles.deleteButton} onClick={confirmDelete}>
            <BsTrash size={20}/>
          </button>
          {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this task?</p>
            <div className={styles.divider}/>
            <button className={styles.modalButtons} onClick={handleDelete}>Yes</button>
            <div className={styles.divider}/>
            <button className={styles.modalButtons} onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}
        </div>
      )}
      
    </div>
  );
}

export default Task;
