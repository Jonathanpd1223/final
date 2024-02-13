import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {
  const [description, setDescription] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      await axios.post('http://localhost:5000/todos', body);
      window.location = '/'; // Refresh the page or improve with state management
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Add a todo" />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
