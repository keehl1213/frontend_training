import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import * as Style from './TodoStyle';
import { Todo } from './index';

interface TodoListProps {
  list: Todo[],
  doMarkDone: (info: Todo) => void,
  doDelete: (info: Todo) => void,
}

const TodoList = ({ list, doMarkDone, doDelete }: TodoListProps) => {
  const [showDone, setShowDone] = useState(false);

  const filterList = (array: Todo[], isShowDone: boolean) => (
    array.filter((ele) => (ele.done === isShowDone || ele.done === false))
  );

  const onShowDoneChange = (e) => {
    setShowDone(e.target.checked);
  };

  const showList = filterList(list, showDone);

  return (
    <>
      <Style.TaskInfoBar>
        <p>{showList.length} Item(s)</p>
        <div>
          <label htmlFor="showDone">
            <input type="checkbox" id="showDone" checked={showDone} onChange={onShowDoneChange} />
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

// TodoList.propTypes = {
//   list: PropTypes.array.isRequired,
//   doMarkDone: PropTypes.func.isRequired,
//   doDelete: PropTypes.func.isRequired,
// };
