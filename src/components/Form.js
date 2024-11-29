import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };

    onAddTask(newTask);
    setDescription("");
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={description}
        onChange={handleDescriptionChange}
        className="item-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
}
