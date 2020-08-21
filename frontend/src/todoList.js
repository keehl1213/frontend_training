import React, {useState, useEffect} from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const TodoList = () => {
  const [initTodos, setInitTodos] = useState([]);
  const [todos, setTodos] = useState(initTodos);
  const [showTodos, setShowTodos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const num = showTodos.length;

  const addItem = (text) => {
    if (todos.find((data) => data.text === text)) {
      return;
    }
      const newTodos = [...todos, { text, id: (Math.random()), isCompleted: false }];
      setTodos(newTodos);
  };

  const completeItem = (id) => {
    const item = todos.find((data) => data.id === id);
    item.isCompleted = true;
    const date = new Date();
    item.completeTime = `完成時間：${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()} ${date.getHours()} : ${date.getMinutes()}`;
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const deleteItem = (id) => {
    const newTodos = todos.filter((data) => data.id !== id);
    setTodos(newTodos);
  };

  const handleShow = () => {
    setShowAll((prevState) => !prevState);
  };

  const showList = () => {
    if (showAll === true) {
      setShowTodos(todos);
    } else {
      setShowTodos(todos.filter((data) => data.isCompleted === false));
    }
  };

  useEffect(() => { showList(); }, [showAll, todos]);

//   useEffect(() => {
//     initTodos = JSON.parse(localStorage.getItem('list'));
//     setInitTodos(todoData);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(todoData));
//   }, [todos]);

  return (
    <div>
      <TodoForm addItem={addItem} />
      <div className="todoList">
        <p className="itemNum">{num} item(s)</p>
        <label htmlFor="showAll">
          <input
            type="checkbox"
            checked={showAll}
            onChange={handleShow}
          />
          Show done items
        </label>

        {showTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeItem={completeItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
