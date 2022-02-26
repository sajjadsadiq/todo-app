import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handelAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e) =>{ 
        handelAdd(e)
        inputRef.current?.blur()
        }}>
      <div className="SearchBox">
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="SearchBoxInput"
          placeholder="Enter A Task"
          type="text"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputFeild;
