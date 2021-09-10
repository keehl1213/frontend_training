import React from "react";

const TodoItem = (props) => {
  const {name, id} = props;
  return (
    <ul className="todo-item">
      <li>
        <span>{name}</span>
        <span className="todo-item-actions">
          <button onClick={() => props.handlerDone(id)} type="button">Mark as done</button>
          <button onClick={() => props.handlerDelete(id)} type="button">Delete</button>
        </span>
      </li>
    </ul>
  );
};

export default TodoItem;
