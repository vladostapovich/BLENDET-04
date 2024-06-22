import { FiSearch } from 'react-icons/fi';
import { addTodo } from '../../reduxTodo/todoSlise';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();
  function handelSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.search.value;
    const todo = { text: value, id: nanoid() };
    dispatch(addTodo(todo));
  }

  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
