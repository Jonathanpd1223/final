import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ getTodos }) => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/todos', { description });
      setDescription('');
      getTodos(); // Refresh the list of todos
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
