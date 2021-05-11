import React from 'react';
import * as Style from './Style.js';
import TodoPage from './components/todopage/TodoPage';

const todoList = [
  {
    id: 0,
    name: "Read a book",
    done: false,
    date: ""
  },
  {
    id: 1,
    name: "Jog in a playground",
    done: false,
    date: ""
  },
  {
    id: 2,
    name: "Write articles",
    done: true,
    date: "完成時間:2021/05/05 11:42"
  }
];
const App = () => {
  return (
    <Style.Body>
      <Style.Header>
        <Style.Title>TODO <b>LIST</b></Style.Title>
        <Style.TitleComment>A simple todolist built react hooks & context</Style.TitleComment>
      </Style.Header>
      <Style.Main>
        <TodoPage list={todoList} />
      </Style.Main>
    </Style.Body>
  );
}
export default App;
