import React from "react";

function Task({text, category, task, onTaskDelete}) {
  console.log(`Task Func: task : ${task}`);
  const handleDelete = () => {
    onTaskDelete(task.text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
