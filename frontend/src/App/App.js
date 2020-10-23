import React, { useEffect, useState } from 'react';
import * as Style from "./Style";
import TodoAct from "./components/TodoAct";
import Date from "./components/DateFormat";

const Data = [
  {
    id: 1,
    title: 'eat',
    doneTime: '2020/10/23'
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
  {
    id: 5,
    title: 'learn1',
    doneTime: '2020/10/23'
  },
  {
    id: 5,
    title: 'learn2',
    doneTime: ''
  },
  {
    id: 5,
    title: 'learn3',
    doneTime: '2020/10/23'
  },
];

const App = () => {
  const [list, setList] = useState(Data);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [doneChecked, setDoneChecked] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const todoList = list.filter((item) => !item.doneTime);
  const [listLength, setListLength] = useState(todoList.length);
  const [pageNum, setPageNum] = useState(0);

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
    if (search) {
      const newList = list.filter((array) => array.title.toLowerCase().includes(search.toLowerCase()));
      setSearchResult(newList);
      setSearch('');
      setIsSearched(true);
      setListLength(newList.length);
    }
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

  const handleDoneClick = () => {
    setDoneChecked(!doneChecked);
    if (!isSearched) {
      setListLength(!doneChecked ? list.length : todoList.length);
    }
  };

  const showPage = () => {
    const page = [];
    (isSearched ? searchResult : list)
    .filter((item) => (!doneChecked ? !item.doneTime : true))
    .forEach((element, index) => { if (index % 3 === 0) { page.push(index); } });
    return (
      page.map((item, index) => (
        <button type="submit" onClick={() => setPageNum(index)}>
          {index + 1}
        </button>
      ))
    );
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
            <Style.ListText>{listLength} items</Style.ListText>
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
                  onClick={handleDoneClick}
                  checked={doneChecked}
                />
                Show done items
              </Style.Box>
            </Style.ListText>
          </Style.Item>
          <Style.ListShow>
            {
              (isSearched ? searchResult : list)
              // .filter((array) => (isSearched ? array.title.toLowerCase().includes(search.toLowerCase()) : true))
              .filter((item) => (!doneChecked ? !item.doneTime : true))
              .slice(pageNum * 3, 3 * (pageNum + 1))
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
        <Style.Page>
          {showPage()}
        </Style.Page>
      </Style.ContentBox>
    </Style.Container>
  );
};
export default App;
