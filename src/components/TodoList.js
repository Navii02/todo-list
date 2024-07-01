import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { List, Typography } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  // Sort todos by id (or timestamp) in descending order
  const sortedTodos = [...todos].sort((a, b) => b.id - a.id);

  return (
    <div>
      {sortedTodos.length === 0 ? (
        <Typography variant="body1" align="center" color="textSecondary">
          No tasks available. Add a new task!
        </Typography>
      ) : (
        <List>
          {sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </div>
  );
};

export default TodoList;
