import { Text, Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectorTodo } from '../../reduxTodo/todoSlise';
import { selectFilter } from '../../reduxTodo/filterSlice';

export const TodoList = () => {
  const todos = useSelector(selectorTodo);
  const filter = useSelector(selectFilter);

  const filtredTodo = () => {
    return todos.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase()))  
  }
  return (
    <>
      <Grid>
        {filtredTodo().map((item, index) => {
          return (
            <GridItem key={item.id}>
              <Todo item={item} counter={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
      {filtredTodo().length === 0 && <Text textAlign="center">We did not find any todo😯</Text>}
    </>
  );
};
