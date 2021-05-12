import React, {useState} from 'react';
import * as Style from './TodoStyle';
import {Todo} from './index';

type TaskProps = {
  info: Todo,
  onMarkDone: (todo: Todo) => void,
  onDelete: (todo: Todo) => void
};

const Task = ({ info, onMarkDone, onDelete } : TaskProps) => {
  const [isHavor, setIsHavor] = useState(false);

  const renderTask = (isDone: boolean) => {
    if (isDone) {
      return (<Style.TaskInfoDate data-testid="test-date">{info.date}</Style.TaskInfoDate>);
    }
    if (isHavor) {
      return (
        <>
          <button type="button" data-testid="test-done-button" onClick={() => onMarkDone(info)}>
            Mark as done
          </button>
          <button type="button" data-testid="test-delete-button" onClick={() => onDelete(info)}>
            Delete
          </button>
        </>
      );
    }
    return (<></>);
  };

  return (
    <Style.TaskInfoRow
      data-testid="test-info-row"
      onMouseEnter={() => setIsHavor(true)}
      onMouseLeave={() => setIsHavor(false)}
    >
      <Style.TaskInfoName data-testid="test-name" isFinish={info.done}>{info.name}</Style.TaskInfoName>
      <Style.TaskInfoBlock>
        {
          renderTask(info.done)
        }
      </Style.TaskInfoBlock>
    </Style.TaskInfoRow>
  );
};

export default Task;
