import { configureStore } from '@reduxjs/toolkit';
import { todosReduser } from './todoSlise';

export const store = configureStore({ reducer: { todos: todosReduser } });
