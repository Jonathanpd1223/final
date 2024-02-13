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
