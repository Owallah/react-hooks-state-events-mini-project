import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState('')
  const [category, setCategory] = useState([0])

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0]);
  };

  const categoryOptions = categories
    .filter((category) => category !== 'All')
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category"  onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
