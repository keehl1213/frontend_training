import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import * as Style from './TodoStyle.js';

const TodoList = ({ list, doMarkDone, doDelete }) => {
  const [showList, setShowList] = useState(list);
  const [showDone, setShowDone] = useState(false);

  const filterList = (array, isShowDone) => (
    array.filter((ele) => (ele.done === isShowDone || ele.done === false))
  );

  const onShowDoneChange = (e) => {
    setShowDone(e.target.checked);
  };

  useEffect(() => {
      setShowList(list);
    }, [list]);

  return (
    <>
      <Style.TaskInfoBar>
        <p>{filterList(showList, showDone).length} Item(s)</p>
        <div>
          <label htmlFor="showDone">
            <input type="checkbox" id="showDone" value={showDone} onChange={onShowDoneChange} />
            Show done items
          </label>
        </div>
      </Style.TaskInfoBar>
      <Style.TaskInfoList>
        {filterList(showList, showDone).map((todo) => (
          <Task info={todo} onMarkDone={doMarkDone} onDelete={doDelete} key={todo.id} />
        ))}
      </Style.TaskInfoList>
    </>
  );
};

export default TodoList;

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  doMarkDone: PropTypes.func.isRequired,
  doDelete: PropTypes.func.isRequired,
};