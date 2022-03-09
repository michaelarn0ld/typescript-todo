import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        ref.current?.blur();
      }}
    >
      <input
        ref={ref}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      ></input>
      <button className="input__submit">Go</button>
    </form>
  );
};
