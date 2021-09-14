import React from "react";

const TodoItem = (props) => {
  const {value, id, handleDone, handleDelete} = props;
  return (
    <ul className={value.status ? 'todo-item' : 'todo-item todo-item-hover'}>
      <li>
        <span className={value.status ? 'text-line todo-item--name' : 'todo-item--name'}>{value.item}</span>
        <span className="todo-item-actions">
          <button onClick={() => handleDone(id)} type="button">Mark as done</button>
          <button onClick={() => handleDelete(id)} type="button">Delete</button>
        </span>
        <span className={value.status ? 'unCompleted' : 'isCompleted'}>{`完成時間：${value.time}`}</span>
      </li>
    </ul>
  );
};

export default TodoItem;
