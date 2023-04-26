import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {categories} 
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm 
      categories = {categories} 
      onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks = {filteredTasks} onTaskDelete={setTasks}/>
      
      
    </div>
  );
}

export default App;
