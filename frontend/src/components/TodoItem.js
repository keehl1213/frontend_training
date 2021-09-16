import React, { useState} from "react";

const TodoItem = (props) => {
  const {value, id, handleAction, handleDelete, handleBlur} = props;
  const [editValue, setEditValue] = useState(value.item);
   const handleChangeText = (event) => {
     if (editValue) {
        setEditValue(event.target.value.trim());
     }
  };
  return (
    <ul className={value.status !== 'todo' ? 'todo-item' : 'todo-item todo-item-hover'}>
      <li>
        <span className={value.status !== 'todo' ? 'text-line todo-item--name' : 'todo-item--name'}>
          <button type="button" onClick={() => handleBlur(id, 'todo', editValue)}>{value.edited ? 'ok' : 'edit'}</button>
          <span>{!value.edited && `${value.item}`}</span>
          <input className={value.edited ? 'unCompleted' : 'isCompleted'} value={editValue} onChange={handleChangeText} />
        </span>
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
