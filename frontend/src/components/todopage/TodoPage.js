import React, { useState, useEffect } from 'react';
import produce from 'immer';
import dayjs from 'dayjs';
import * as Style from './TodoStyle.js';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const getTimeStamp = () => Math.floor(new Date().getTime() / 1000);
export const transferDate = (date) => dayjs(date).format('YYYY/MM/DD HH:mm');

const TodoPage = ({ list }) => {
  const [showList, setShowList] = useState(list);
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const res1 = await res.json();
  //     setApiData(res1);
  //     console.log(res1);
  //   }
  //   fetchData();
  // }, [list]);
  const createNewTask = (newName) => ({
        id: getTimeStamp(),
        name: newName,
        done: false,
        date: ""
  });

  const doAdd = (name) => {
    const newList = produce(showList, (draftState) => {
      draftState.push(createNewTask(name));
    });
    setShowList(newList);
  };

  const doMarkDone = (info) => {
    const newList = produce(showList, (draft) => {
      const index = draft.findIndex((todo) => todo.id === info.id);
      if (index >= 0) {
        draft[index].done = true;
        draft[index].date = `完成時間:${transferDate(new Date())}`;
      }
    });
    setShowList(newList);
  };

  const doDelete = (info) => {
    setShowList(showList.filter((ele) => ele.id !== info.id));
  };

  const doClearDone = () => {
    const newList = showList.filter((ele) => (!ele.done));
    setShowList(newList);
  };


  return (
    <Style.Container>
      <TodoInput doAdd={doAdd} doClearDone={doClearDone} />
      <TodoList list={showList} doMarkDone={doMarkDone} doDelete={doDelete} />
    </Style.Container>
  );

};

export default TodoPage;
