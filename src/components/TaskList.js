import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} {...task} onDelete={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
