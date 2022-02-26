import React, { useState } from 'react';
import { Todo } from '../model';
import TodoList from './TodoList';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handelDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handelDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form>
      <div className="TaskBox">
        {edit ? (
          <input
            className="inputEditbox"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            type="text"
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div className="TaskIcons">
          <i
            className="bx bxs-edit"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          ></i>
          <i className="bx bx-trash" onClick={() => handelDelete(todo.id)}></i>
          <i
            className="bx bx-check-square"
            onClick={() => handelDone(todo.id)}
          ></i>
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
