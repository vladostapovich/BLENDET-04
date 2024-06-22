import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  },
});

export const selectorTodo = state => state.todos.items;

export const { addTodo, deleteTodo } = todoSlise.actions;
export const todosReduser = todoSlise.reducer;
