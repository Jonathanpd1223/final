const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the todo ID from the URL
    const { description } = req.body; // Get the new description from the request body

    const updateTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );

    if (updateTodo.rows.length === 0) {
      return res.status(404).json("Todo not found");
    }

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the todo ID from the URL

    const deleteTodo = await pool.query(
      "DELETE FROM todos WHERE todo_id = $1 RETURNING *",
      [id]
    );

    if (deleteTodo.rows.length === 0) {
      return res.status(404).json("Todo not found");
    }

    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

