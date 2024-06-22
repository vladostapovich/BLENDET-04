import { Text, Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectorTodo } from '../../reduxTodo/todoSlise';

export const TodoList = () => {
  const todos = useSelector(selectorTodo);

  return (
    <>
      <Grid>
        {todos.map((item, index) => {
          return (
            <GridItem key={item.id}>
              <Todo item={item} counter={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
      <Text textAlign="center">We did not find any todo😯</Text>
    </>
  );
};
