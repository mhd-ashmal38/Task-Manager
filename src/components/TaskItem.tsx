import React from 'react';
import { Task } from '../model';

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3'>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={() => toggleComplete(task.id)}
        />
        <div style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
          {task.description}
        </div>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
