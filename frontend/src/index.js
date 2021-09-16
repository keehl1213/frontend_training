import React, { useMemo, useState, useEffect } from "react";
import { render } from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './components/TodoItem';
import list from "./api/list";
import '@/App.css';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [isType, setIsType] = useState(['todo']);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeText = (event) => {
    setInputText(event.target.value);
  };
  const handleAdd = async () => {
    if (inputText) {
      const response = await list.addTodoItem({item: inputText, status: 'todo', time: '', id: uuidv4(), edited: isEdit });
      setTodoData((todo) => [...todo, response.data]);
    }
    setInputText('');
  };
  const handleShowDone = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setIsType((type) => [...type, checkboxValue]);
    }
    if (!event.target.checked) {
      setIsType((type) => type.filter((element) => element !== checkboxValue));
    }
  };
  const handleDelete = async (id) => {
    await list.deleteTodoItem(id);
    const deletetodolist = todoData.filter((item) => item.id !== id);
    setTodoData(deletetodolist);
  };
  const handleAction = async (id, type) => {
    const updatedList = todoData.map((element) => {
        if (element.id === id) {
          const endTime = new Date().toLocaleString();
          return {...element, status: type, time: endTime};
        }
      return element;
   });
    const editIndex = updatedList.findIndex((element) => element.id === id);
    await list.editTodoItem(id, updatedList[editIndex]);
    setTodoData(updatedList);
  };
  const handleBlur = async (id, type, editvalue) => {
    const editedList = todoData.map((item) => {
    if (item.id === id) {
        return {...item, item: editvalue, status: type, edited: !isEdit};
      }
    return item;
   });
    const editIndex = editedList.findIndex((element) => element.id === id);
    await list.editTodoItem(id, editedList[editIndex]);
    setIsEdit(() => !isEdit);
    setTodoData(editedList);
  };
  const todolistData = useMemo(
    () => todoData.filter((element) => isType.includes(element.status)),
    [todoData, isType]
  );
  useEffect(() => {
    const geToDoList = async () => {
       const response = await list.geToDoList();
       setTodoData(response.data);
    };
    geToDoList();
  }, []);
  return (
    <div className="container">
      <h1 className="font-text title">TODO<strong>LIST</strong></h1>
      <h2 className="font-text subtitle">A Simple todolist built react hooks &amp; context</h2>
      <div className="todo-input-box">
        <input placeholder="Add your task here..." value={inputText} onChange={handleChangeText} />
        <button onClick={handleAdd} type="button">Add</button>
      </div>
      <div className="todo-data">
        <div className="todo-checkbox-bar">
          <span>{todolistData.length} item(s)</span>
          <span>
            <label htmlFor="done">
              <input type="checkbox" id="done" value="done" onChange={handleShowDone} />
             Show done items
            </label>
            <label htmlFor="archived">
              <input type="checkbox" id="archived" value="archived" onChange={handleShowDone} />
             Show archived items
            </label>
          </span>
        </div>
        {todolistData.map((todo) => <TodoItem value={todo} key={todo.id} id={todo.id} handleDelete={handleDelete} handleAction={handleAction} handleBlur={handleBlur} />)}
      </div>
    </div>
  );
};

render(<Main />, document.getElementById("app"));

console.log("%cWelcome to R360", "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em; color: white;");
