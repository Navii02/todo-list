import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ 
        id: Date.now(), 
        text: action.payload, 
        completed: false, 
        timestamp: new Date().toLocaleString(),
        completedAt: null
      });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    toggleTodo: (state, action) => {
      const newState = state.map(todo => 
        todo.id === action.payload 
        ? { ...todo, completed: !todo.completed, completedAt: !todo.completed ? new Date().toLocaleString() : null } 
        : todo
      );
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    loadTodos: (state, action) => {
      return action.payload;
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
