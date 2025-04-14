import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Buy rice", category: "Food" },
    { id: "2", text: "Build a todo app", category: "Code" }
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={(newTask) => 
          handleAddTask({
            text: newTask.text,
            category: newTask.category,
            id: Date.now().toString()
          })
        } 
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
