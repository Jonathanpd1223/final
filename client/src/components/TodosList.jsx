import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodosList = ({ setEditTodo }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);


  const deleteTodo = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo.todo_id !== id));
  } catch (err) {
    console.error(err.message);
  }
};

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.todo_id}>
          {todo.description}
          <button onClick={() => setEditTodo(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
