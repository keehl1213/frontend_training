import React from "react";

const TodoItem = (props) => {
  const {value, id, handleAction, handleDelete} = props;
  return (
    <ul className={value.status !== 'todo' ? 'todo-item' : 'todo-item todo-item-hover'}>
      <li>
        <span className={value.status === 'done' ? 'text-line todo-item--name' : 'todo-item--name'}>{value.item}</span>
        <span className="todo-item-actions">
          <button onClick={() => handleAction(id, 'done')} type="button">Mark as done</button>
          <button onClick={() => handleAction(id, 'archived')} type="button">Archived</button>
          <button onClick={() => handleDelete(id)} type="button">Delete</button>
        </span>
        <span className={value.status !== 'todo' ? 'unCompleted' : 'isCompleted'}>{`完成時間：${value.time}`}</span>
      </li>
    </ul>
  );
};

export default TodoItem;
