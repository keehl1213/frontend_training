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
  {
    id: 3,
    title: 'play',
    doneTime: ''
  },
  {
    id: 4,
    title: 'read',
    doneTime: ''
  },
];

const App = () => {
  const [list, setList] = useState(Data);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [doneChecked, setDoneChecked] = useState(false);
  // const [pageNum, setPageNum] = useState(0);


  const needTodoList = list.filter((item) => !item.doneTime);
  const listLength = list.length;
  const todoListLength = needTodoList.length;

  const addItems = () => {
    const id = Math.random();
    if (title) {
      setList([...list, { id, title, doneTime: '' }]);
      setTitle('');
    }
  };

  const doneTodo = (id) => {
    const newList = [...list];
    const findDoneObj = newList.find((item) => (item.id === id));
    const findIndexNum = newList.findIndex((item) => (item.id === id));
    newList.splice(findIndexNum, 1, { ...findDoneObj, doneTime: new Date().format() });
    setList(newList);
  };

  const deleteTodo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const searchItem = () => {
    const newList = list.filter((array) => array.title.toLowerCase().includes(search.toLowerCase()));
    setList(newList);
    setSearch('');
  };

  const sortFuc = (e) => {
    const newList = [...list];
    newList.sort((a, b) => {
      const A = a.title.toUpperCase();
      const B = b.title.toUpperCase();
      const reg = /[a-zA-Z]/;
      const num = /[0-9]/;
      if (reg.test(A) || reg.test(B)) {
        if (A < B) {
        return -1;
      }
        if (A > B) {
        return 1;
      }
        return 0;
      }
      if (num.test(A) || num.test(B)) {
        return A - B;
      }
        return A.localeCompare(B);
    });
    if (e.target.value === 'asc') {
      setList(newList);
    } else {
      newList.reverse();
      setList(newList);
    }
  };

  // const pageTotalNum = () => {
  //   const page = listLength / 3;
  //   const totalPage = Math.ceil(page);;
  // }

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
        <Style.Search>
          <input
            type="text"
            className="searchBox"
            placeholder="search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={searchItem}>
            Search
          </button>
        </Style.Search>
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
            <Style.ListText>{doneChecked ? listLength : todoListLength} items</Style.ListText>
            <Style.ListText>
              <Style.Box>
                  Sort:
                <input
                  name="sort"
                  value="asc"
                  type="radio"
                  onClick={sortFuc}
                />
                Asc
                <input
                  name="sort"
                  value="desc"
                  type="radio"
                  onClick={sortFuc}
                />
                Desc
              </Style.Box>
              <Style.Box>
                <input
                  type="checkbox"
                  onClick={() => setDoneChecked(!doneChecked)}
                  checked={doneChecked}
                />
                Show done items
              </Style.Box>
            </Style.ListText>
          </Style.Item>
          <Style.ListShow>
            {
              list
              .map((item) => (
                <TodoAct
                  item={item}
                  deleteTodo={deleteTodo}
                  doneTodo={doneTodo}
                  doneChecked={doneChecked}
                />
              ))
            }
          </Style.ListShow>
        </Style.ListBox>
        <Style.ContentBox>
          <Style.PageBox>
            {/* {totalPage} */}
          </Style.PageBox>
        </Style.ContentBox>
      </Style.ContentBox>
    </Style.Container>
  );
};
export default App;
