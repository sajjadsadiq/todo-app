import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log('todos', todos);

  return (
    <div className="App">
      <div className="TodoBox">
        <InputFeild todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
