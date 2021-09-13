import React from "react";

const TodoItem = (props) => {
  const {value, id, handlerDone, handlerDelete} = props;
  return (
    <ul className={value.status ? 'todo-item' : 'todo-item-hover'}>
      <li>
        <span className={value.status ? 'text-line' : ''}>{value.item}</span>
        <span className="todo-item-actions">
          <button onClick={() => handlerDone(id)} type="button">Mark as done</button>
          <button onClick={() => handlerDelete(id)} type="button">Delete</button>
        </span>
        <span className={value.status ? 'unCompleted' : 'isCompleted'}>{`完成時間：${value.time}`}</span>
      </li>
    </ul>
  );
};

export default TodoItem;
