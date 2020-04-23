import React, { useState, useEffect, useRef, useMemo } from "react";
import './TodoList.css';
import { createUniqueID } from "@/utils/common";
import TodoItem from "@/components/TodoItem/TodoItem";

const TodoList = () => {
  const [todosData, setTodosData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isShowDone, setIsShowDone] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputText.length === 0) {
      inputRef.current.focus();
    }
  }, [inputText]);

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const addTask = () => {
    const taskStr = inputText.trim();
    if (taskStr.length > 0) {
      const newID = createUniqueID(todosData);
      const item = { id: newID, task: inputText, isDone: false, finishTime: null };
      setTodosData([...todosData, item]);
      setInputText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };

  const handleAdd = () => {
    addTask();
  };

  const handleSwitch = () => {
    setIsShowDone((prevState) => !prevState);
  };

  const handleDone = (id) => {
    setTodosData(todosData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: true,
          finishTime: new Date().toLocaleString([], { hour12: false })
        };
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    setTodosData(todosData.filter((item) => item.id !== id));
  };

  const getDisplayData = () => todosData.filter((todo) => {
    if (!isShowDone && todo.isDone) {
      return false;
    }
    return true;
  });

  const displayData = useMemo(() => getDisplayData(), [isShowDone, todosData]);

  return (
    <div className="todo-container">
      <div className="title">TODO<b>LIST</b></div>
      <div className="sub-title">A Simple todolist built react hooks & context</div>
      <div className="input-row">
        <input
          type="text"
          value={inputText}
          placeholder="Add your task here..."
          ref={inputRef}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={handleAdd}>Add
        </button>
      </div>
      <div className="total-row">
        <p>{displayData.length} item(s)</p>
        <label htmlFor="showAll" className="show-checkbox">
          <input
            type="checkbox"
            id="showAll"
            name="showAll"
            checked={isShowDone}
            onChange={handleSwitch} />
          Show done items
        </label>
      </div>
      <div className="task-container">
        {
          displayData.map((todo) => (<TodoItem key={todo.id} item={todo} handleDone={handleDone} handleDelete={handleDelete} isShowDone={isShowDone} />))
        }
      </div>
    </div>
  );
};

export default TodoList;
