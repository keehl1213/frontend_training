import React, { useState, useEffect } from "react";
import './TodoItem.css';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { item, handleDone, handleDelete, isShowDone } = props;
  const { id, task, isDone, finishTime } = item;

  useEffect(() => {
    setIsHover(false);
  }, [isShowDone]);

  const onMouseOver = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={`task-row ${isHover ? 'task-hover' : ''}`} onMouseOver={onMouseOver} onFocus={() => 0} onMouseLeave={onMouseLeave}>
      <div className={`${isDone ? 'task-done' : ''}`}>{task}</div>
      <>
        {(isHover && !isDone) && (
          <div>
            <button type="button" onClick={() => handleDone(id)}>Mark as done</button>
            <button type="button" onClick={() => handleDelete(id)}>Delete</button>
          </div>
        )}
        {isDone && (
          <div className="task-time">{`完成時間 ${finishTime}`}</div>
        )}
      </>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isShowDone: PropTypes.bool.isRequired,
};
