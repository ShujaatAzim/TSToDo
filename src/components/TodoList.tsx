import React from 'react';
import SingleTodo from './SingleTodo';
import { Todo } from '../model';
import './styles.css';

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  completedTodos: Todo[],
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
          {todos.map(todo => <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map(todo => <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
      </div>
    </div>
  );
}

export default TodoList;