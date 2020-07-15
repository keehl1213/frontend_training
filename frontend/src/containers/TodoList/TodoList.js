import React, { useState, useMemo} from "react";
import * as Style from './style';

import InputDiv from '@/components/InputDiv/InputDiv';
import Item from '@/components/Item/Itim';

const TodoList = () => {
  const [todosData, setTodosData] = useState([]);
  const [isShowDone, setIsShowDone] = useState(false);

  const attributes = {isDone: false, finishTime: null };
  const placeholder = "Add your task here...";

  const addTodosData = (row) => {
    setTodosData([...todosData, row]);
  };


  const getDisplayData = () => todosData.filter((todo) => {
    if (!isShowDone && todo.isDone) {
      return false;
    }
    return true;
  });

  const ItemMap = useMemo(() => getDisplayData(), [isShowDone, todosData]);


  const handleDone = (id) => {
    setTodosData(todosData.map((item) => {
      if (item.id === id) {
        return {...item, isDone: true, finishTime: new Date().toLocaleString('zh-TW', { hour12: false }) };
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    setTodosData(todosData.filter((item) => item.id !== id));
  };


  const showChange = () => {
    setIsShowDone((isState) => !isState);
  };

  const TitleDiv = () => (
    <>
      <Style.Title>TODO<b>LIST</b></Style.Title>
      <Style.SubTitle>A Simple todolist built react hooks & context</Style.SubTitle>
    </>
  );

  const ItemList = () => (
    <>
      <Style.ItemRow>
        <p>{ItemMap.length} item(s)</p>
        <label htmlFor="showAll">
          <Style.Checkbox
            type="checkbox"
            id="showAll"
            name="showAll"
            checked={isShowDone}
            onChange={showChange} />
          {placeholder}
        </label>
      </Style.ItemRow>
      <Style.ListContainer>
        {ItemMap.map((todo) => <Item key={todo.id} item={todo} Done={handleDone} Delete={handleDelete} isShowDone={isShowDone} />)}
      </Style.ListContainer>
    </>
  );

  return (
    <Style.Todo>
      <TitleDiv />
      <InputDiv data={todosData} addData={addTodosData} attributes={attributes} placeholder={placeholder} />
      <ItemList />
    </Style.Todo>
  );
};


export default TodoList;
