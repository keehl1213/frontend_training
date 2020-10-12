import React, { useState } from 'react';
import * as Style from "./Style";
import TodoAct from "./components/TodoAct";
import Date from "./components/DateFormat";

const Data = [
  {
    id: 1,
    title: 'eat',
    doneTime: '2020/10/06 02:02'
  },
  {
    id: 2,
    title: 'sleep',
    doneTime: ''
  },
];

const App = () => {
    const [list, setList] = useState(Data);
    const [title, setTitle] = useState('');
    const [doneCheck, setDoneCheck] = useState(false);

    const addItems = () => {
      const id = Math.random();
      if (title) {
        setList([...list, {id, title, doneTime: ''}]);
        setTitle('');
      }
    };

    const doneTodo = (id) => {
      const findDoneList = list.find((item) => (item.id === id));
      const findIndexNum = list.findIndex((item) => (item.id === id));
      const updateTodo = {...findDoneList, doneTime: new Date().format()};
      list.splice(findIndexNum, 1, updateTodo);
      setList([...list]);
    };

    const deleteTodo = (id) => {
      setList(list.filter((item) => item.id !== id));
    };

    return (
      <Style.Container>
        <Style.Header>
          <h1>
            Todo<strong>List</strong>
          </h1>
          <h2>
            A Simple todolist built react hooks & context
          </h2>
        </Style.Header>
        <Style.ContentBox>
          <Style.AddList>
            <input
              type="text"
              className="inputBox"
              placeholder="Add your task here…"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              type="submit"
              className="addButton"
              onClick={addItems}>
              Add
            </button>
          </Style.AddList>
          <Style.ListBox>
            <Style.Item>
              <Style.ListText>{list.length} items</Style.ListText>
              <Style.ListText>
                <input
                  type="checkbox"
                  onClick={() => setDoneCheck(!doneCheck)}
                  checked={doneCheck}
                />
                Show done items
              </Style.ListText>
            </Style.Item>
            {
              doneCheck
              ? (
                list
                .map((item) => (
                  <TodoAct
                    item={item}
                    deleteTodo={deleteTodo}
                    doneTodo={doneTodo}
                  />
                  ))
                )
                : (
                  list
                  .filter((item) => !item.doneTime)
                  .map((item) => (
                    <TodoAct
                      item={item}
                      deleteTodo={deleteTodo}
                      doneTodo={doneTodo}
                    />
                  ))
                )
              }
          </Style.ListBox>
        </Style.ContentBox>
      </Style.Container>
    );
};
export default App;
