import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';
import './styles.css';

interface Props {
  index: number,
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({index, todo, todos, setTodos}) => {

  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    )
  }

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, todo: editTodo} : todo)
    )
    setEdit(false)
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form className={`todos__single ${snapshot.isDragging ? "drag" : ""}`} onSubmit={(e) => handleEdit(e, todo.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          { edit ? 
            <input ref={inputRef} value={editTodo} onChange={e => setEditTodo(e.target.value)} className="todos__single--text" /> : 
            todo.isDone ? <s className="todos__single--text">{todo.todo}</s> : 
            <span className="todos__single--text">{todo.todo}</span> 
          }
          <div>
            <span className="icon" onClick={() => !todo.isDone ? setEdit(!edit) : null }><AiFillEdit /></span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
          </div>
        </form>
      )}
    </Draggable>
  );
}

export default SingleTodo;