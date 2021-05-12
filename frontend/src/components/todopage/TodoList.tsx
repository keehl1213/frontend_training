import React, { useState} from 'react';
import Task from './Task';
import * as Style from './TodoStyle';
import { Todo } from './index';

type TodoListProps = {
  list: Array<Todo>,
  doMarkDone: (info: Todo) => void,
  doDelete: (info: Todo) => void,
};

const TodoList = ({ list, doMarkDone, doDelete } : TodoListProps) => {
  const [showDone, setShowDone] = useState(false);

  const filterList = (array: Array<Todo>, isShowDone: boolean) : Array<Todo> => (
    array.filter((ele:Todo) => (ele.done === isShowDone || ele.done === false))
  );

  const onShowDoneChange = (e : React.FormEvent<HTMLInputElement>) : void => {
    setShowDone(e.currentTarget.checked);
  };

  const showList = filterList(list, showDone);

  return (
    <>
      <Style.TaskInfoBar>
        <p data-testid="test-item-count">{showList.length} Item(s)</p>
        <div>
          <label htmlFor="showDone">
            <input type="checkbox" id="showDone" data-testid="test-showDown-button" checked={showDone} onChange={onShowDoneChange} />
            Show done items
          </label>
        </div>
      </Style.TaskInfoBar>
      <Style.TaskInfoList>
        {showList.map((todo) => (
          <Task info={todo} onMarkDone={doMarkDone} onDelete={doDelete} key={todo.id} />
        ))}
      </Style.TaskInfoList>
    </>
  );
};

export default TodoList;
