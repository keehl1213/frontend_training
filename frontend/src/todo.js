import React from "react";
import * as Style from './style';

const completeItemStyle = {
  textDecoration: "line-through"
};

const Todo = ({ todo, completeItem, deleteItem }) => (
  <div className="todo">
    <Style.Item>
      <span>{todo.text}</span>
      <span>{todo.completeTime}</span>
    </Style.Item>

    <button
      type="submit"
      onClick={() => completeItem(todo.id)}
    >Mark as done
    </button>

    <button
      type="submit"
      onClick={() => deleteItem(todo.id)}
    >Delete
    </button>
  </div>
);

export default Todo;
