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
    id: 6,
    title: 'learn2',
    doneTime: ''
  },
  {
    id: 7,
    title: 'learn3',
    doneTime: '2020/10/23'
  },
];

const App = () => {
  const [title, setTitle] = useState('');
  const [doneChecked, setDoneChecked] = useState(false);
  const [listLength, setListLength] = useState();
  const [list, setList] = useState(Data);
  const [searchItem, setSearchItem] = useState('');
  const [inputSearchItem, setInputSearchItem] = useState('');
  const [pageNum, setPageNum] = useState(0);
  const [isSortAsc, setIsSortAsc] = useState(true);
  const pageSize = 3;

  const addItems = () => {
    const id = Math.random();
    if (title) {
      const newList = [...list, { id, title, doneTime: '' }];
      setTitle('');
      setList(newList);
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setPageNum(0);
  };

  const markDone = (id) => {
    const newList = [...list];
    const findDoneObj = list.find((item) => (item.id === id));
    const findIndexNum = newList.findIndex((item) => (item.id === id));
    newList.splice(findIndexNum, 1, { ...findDoneObj, doneTime: new Date().format() });
    setList(newList);
    setPageNum(0);
  };

  const handleDoneClick = () => {
    setDoneChecked(!doneChecked);
    setPageNum(0);
  };

  const search = () => {
    setSearchItem(inputSearchItem);
    setPageNum(0);
  };

  const sortFuc = (a, b) => {
    const A = a.title.toUpperCase();
    const B = b.title.toUpperCase();
    const reg = /[a-zA-Z]/;
    const num = /[0-9]/;
    if (reg.test(A) || reg.test(B)) {
      if (A < B) {
        return (isSortAsc ? -1 : 1);
      }
      if (A > B) {
        return (isSortAsc ? 1 : -1);
      }
      return 0;
    }
    if (num.test(A) || num.test(B)) {
      return (isSortAsc ? A - B : B - A);
    }
    return (isSortAsc ? A.localeCompare(B) : B.localeCompare(A));
  };

  const renderList = list.filter((item) => (!doneChecked ? !item.doneTime : true)).filter((array) => array.title.toLowerCase().includes(searchItem.toLowerCase()));
  const page = [...Array(Math.ceil(renderList.length / pageSize))].map((item, index) => index + 1);
  useEffect(() => {
    setListLength(renderList.length);
  },
    [renderList]);

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
            value={inputSearchItem}
            onChange={(e) => setInputSearchItem(e.target.value)}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={search}>
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
                  type="radio"
                  onClick={() => setIsSortAsc(true)}
                  checked={isSortAsc}
                />
                Asc
                <input
                  name="sort"
                  type="radio"
                  onClick={() => setIsSortAsc(false)}
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
              renderList
                .sort(sortFuc)
                .slice(pageNum * pageSize, pageSize * (pageNum + 1))
                .map((item) => (
                  <TodoAct
                    item={item}
                    deleteTodo={deleteTodo}
                    doneTodo={markDone}
                  />
                ))
            }
          </Style.ListShow>
        </Style.ListBox>
        <Style.Page>
          {
            page
            .map((item, index) => (
              <Style.Button pageNum={pageNum} index={index} type="submit" onClick={() => setPageNum(index)}>
                {item}
              </Style.Button>
            ))
          }
        </Style.Page>
      </Style.ContentBox>
    </Style.Container>
  );
};
export default App;
