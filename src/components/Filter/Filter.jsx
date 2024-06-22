import style from './Filter.module.css';
import { setFilter } from '../../reduxTodo/filterSlice';
import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();
  function handleFilter(e) {
    const value = e.target.value;
    dispatch(setFilter(value))

  }
  return <input onChange={ handleFilter} className={style.input} placeholder="Find it" name="filter" />;
};
