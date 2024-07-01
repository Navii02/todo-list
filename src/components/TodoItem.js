import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todoSlice';
import { ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import { Delete, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  todoItem: {
    padding: '10px',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#e0ffe0',
  },
  todoItemText: {
    flexGrow: 1,
    marginLeft: '10px',
  },
  todoItemActions: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <ListItem
      divider
      className={`${classes.todoItem} ${todo.completed ? classes.completed : ''}`}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <IconButton onClick={handleToggle} edge="start">
          {todo.completed ? <CheckCircle color="primary" /> : <RadioButtonUnchecked />}
        </IconButton>
        <ListItemText
          primary={todo.text}
          secondary={
            <>
              <Typography variant="body2" color="textSecondary">
                Added: {todo.timestamp}
              </Typography>
              {todo.completed && (
                <Typography variant="body2" color="textSecondary">
                  Completed: {todo.completedAt}
                </Typography>
              )}
            </>
          }
          className={classes.todoItemText}
        />
      </Box>
      <IconButton onClick={handleDelete} edge="end">
        <Delete color="secondary" />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
