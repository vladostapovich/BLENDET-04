import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectorTodo = state => state.todos.items;

export const { addTodo } = todoSlise.actions;
export const todosReduser = todoSlise.reducer;
