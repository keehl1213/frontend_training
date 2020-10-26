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
  const [dataSource, setDataSource] = useState(Data);
  const [title, setTitle] = useState('');
  const [doneChecked, setDoneChecked] = useState(false);
  const [listLength, setListLength] = useState();
  const todoList = dataSource.filter((item) => !item.doneTime);
  const [list, setList] = useState(todoList);
  const [searchItem, setSearchItem] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [pageNum, setPageNum] = useState(0);

  const addItems = () => {
    const id = Math.random();
    if (title) {
      const newList = [...dataSource, { id, title, doneTime: '' }];
      setDataSource(newList);
      setTitle('');
      const newList1 = newList.filter((item) => !item.doneTime);
      setList(!doneChecked ? newList1 : newList);
      setSearchItem('');
    }
  };

  const deleteTodo = (id) => {
    const newList = dataSource.filter((item) => item.id !== id);
    setDataSource(newList);
    const newList1 = newList.filter((item) => !item.doneTime);
    setList(!doneChecked ? newList1 : newList);
    setSearchItem('');
    setSearchResult('');
  };

  const markDone = (id) => {
    const newList = [...dataSource];
    const findDoneObj = list.find((item) => (item.id === id));
    const findIndexNum = newList.findIndex((item) => (item.id === id));
    newList.splice(findIndexNum, 1, { ...findDoneObj, doneTime: new Date().format() });
    setDataSource(newList);
    const newList1 = newList.filter((item) => !item.doneTime);
    setList(!doneChecked ? newList1 : newList);
    setSearchItem('');
    setSearchResult('');
  };

  const handleDoneClick = () => {
    setDoneChecked(!doneChecked);
    if (searchResult) {
      const newList = searchResult.filter((item) => !item.doneTime);
      setList(doneChecked ? newList : searchResult);
    } else {
      setList(!doneChecked ? dataSource : todoList);
    }
  };

  const search = () => {
    if (searchItem) {
      const newList = dataSource.filter((array) => array.title.toLowerCase().includes(searchItem.toLowerCase()));
      setSearchResult(newList);
      const newList1 = newList.filter((item) => !item.doneTime);
      setList(!doneChecked ? newList1 : newList);
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

  const showPage = () => {
    const page = [];
    list.forEach((element, index) => { if (index % 3 === 0) { page.push(index); } });
    return (
      page.map((item, index) => (
        <button type="submit" onClick={() => setPageNum(index)}>
          {index + 1}
        </button>
      ))
    );
  };

  useEffect(() => {
    setListLength(list.length);
  },
    [list]);

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
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
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
              list
                .slice(pageNum * 3, 3 * (pageNum + 1))
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
          {showPage()}
        </Style.Page>
      </Style.ContentBox>
    </Style.Container>
  );
};
export default App;
