import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import UpdateTodo from './components/UpdateTodo';

const App = () => {
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo getTodos={getTodos} />
      {editTodo ? (
        <UpdateTodo todo={editTodo} getTodos={getTodos} setEditing={setEditTodo} />
      ) : (
        <TodosList setEditTodo={setEditTodo} />
      )}
    </div>
  );
};

export default App;
