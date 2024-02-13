import React, { useState } from 'react';
import axios from 'axios';

const UpdateTodo = ({ todo, getTodos, setEditing }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/todos/${todo.todo_id}`, { description });
      setEditing(false);
      getTodos();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={updateDescription}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTodo;
