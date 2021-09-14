import React, { useState } from "react";
import { render } from "react-dom";
import TodoItem from './components/TodoItem';
import '@/App.css';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [isType, setIsType] = useState(['todo']);

  const handleChangeText = (event) => {
    setInputText(event.target.value.replace(/\s/g, ''));
  };
  const handleAdd = () => {
    if (inputText) {
      setTodoData((todo) => [...todo, {item: inputText, status: 'todo', time: '', id: new Date().getTime()}]);
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
  const handleDelete = (id) => {
    const deletetodolist = todoData.filter((list) => list.id !== id);
    setTodoData(deletetodolist);
  };
  const handleAction = (id, type) => {
  const updatedList = todoData.map((item) => {
      if (item.id === id) {
        const endTime = new Date().toLocaleString();
        return {...item, status: type, time: endTime};
      }
      return item;
    });
    setTodoData(updatedList);
  };

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
          <span>{todoData.length} item(s)</span>
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
        {todoData.filter((element) => isType.includes(element.status)).map((todo) => <TodoItem value={todo} key={todo.id} id={todo.id} handleDelete={handleDelete} handleAction={handleAction} />)}
      </div>
    </div>
  );
};

render(<Main />, document.getElementById("app"));

console.log("%cWelcome to R360", "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em; color: white;");
