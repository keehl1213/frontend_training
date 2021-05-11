import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import * as Style from './TodoStyle.js';

const TodoList = ({ list, doMarkDone, doDelete }) => {
  const [showDone, setShowDone] = useState(false);

  const filterList = (array, isShowDone) => (
    array.filter((ele) => (ele.done === isShowDone || ele.done === false))
  );

  const onShowDoneChange = (e) => {
    setShowDone(e.target.checked);
  };

  const showList = filterList(list, showDone);

  return (
    <>
      <Style.TaskInfoBar>
        <p data-testid="test-item-count">{showList.length} Item(s)</p>
        <div>
          <label htmlFor="showDone">
            <input type="checkbox" id="showDone" data-testid="test-showDown-button" value={showDone} onChange={onShowDoneChange} />
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

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  doMarkDone: PropTypes.func.isRequired,
  doDelete: PropTypes.func.isRequired,
};

export default TodoList;
