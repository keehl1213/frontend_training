import React, { useState } from 'react';
import produce from 'immer';
import dayjs from 'dayjs';
import * as Style from './TodoStyle';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Todo } from './index';

export const getTimeStamp = () => new Date().getTime();
export const transferDate = (date : Date) => dayjs(date).format('YYYY/MM/DD HH:mm');

type TodoPageProps = {
  list: Array<Todo>,
};


const TodoPage = ({list} : TodoPageProps) => {
  const [showList, setShowList] = useState(list);

  const createNewTask = (newName: string) : Todo => ({
    id: getTimeStamp(),
    name: newName,
    done: false,
    date: ''
  });

  const doAdd = (name: string) : void => {
    const newList = produce(showList, (draftState) => {
      draftState.push(createNewTask(name));
    });
    setShowList(newList);
  };

  const doMarkDone = (info: Todo): void => {
    const newList = produce(showList, (draft) => {
      const index = draft.findIndex((todo:Todo) => todo.id === info.id);
      if (index >= 0) {
        draft[index].done = true;
        draft[index].date = `完成時間:${transferDate(new Date())}`;
      }
    });
    setShowList(newList);
  };

  const doDelete = (info: Todo): void => {
    setShowList(showList.filter((ele) => ele.id !== info.id));
  };

  const doClearDone = (): void => {
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
