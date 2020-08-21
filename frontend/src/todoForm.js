import React, {useState} from "react";
import * as Style from './style';
// import './styles.css';

const TodoForm = ({ addItem }) => {
  const [value, setValue] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    addItem(value);
    setValue("");
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        value={value}
        placeholder="Add your task here…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={handleAddItem}
        type="submit"
      >Add
      </button>
    </form>
  );
};

export default TodoForm;
