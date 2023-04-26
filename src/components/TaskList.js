import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete}) {
  console.log(`Tasklist: tasks: ${tasks}`);

  const handleDelete = (value) => {
    onTaskDelete(tasks.filter((task) => task.text !== value))
  }

  const taskItem = tasks.map(task => {
    console.log(`taskItem: ${[task]}`);
    return (
      
          <Task key={task.text} text = {task.text} category={task.category} task={task} onTaskDelete={handleDelete} />
    )
    
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      
        {taskItem}
      
    </div>
  );
}

export default TaskList;
