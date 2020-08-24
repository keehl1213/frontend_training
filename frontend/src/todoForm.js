import React, {useState} from "react";
import * as Style from './style';

const TodoForm = ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addItem(value);
    setValue("");
  };

  return (
    <Style.Form>
      <Style.InputArea
        type="text"
        value={value}
        placeholder="Add your task here…"
        onChange={(e) => setValue(e.target.value)}
      />
      <Style.AddButton
        onClick={handleAddItem}
        type="submit"
      >Add
      </Style.AddButton>
    </Style.Form>
  );
};

export default TodoForm;
