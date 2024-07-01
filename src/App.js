import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, loadTodos } from './components/todoSlice';
import TodoList from './components/TodoList';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import './App.css'; // Import the CSS file for custom styles

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      dispatch(loadTodos(todos));
    }
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Container maxWidth="sm" className="main-container">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          To-Do List
        </Typography>
        <Box display="flex" mb={2}>
          <TextField
            variant="outlined"
            label="Add a new task"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ marginLeft: 10 }}>
            Add
          </Button>
        </Box>
        <Paper elevation={3}>
          <TodoList />
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
