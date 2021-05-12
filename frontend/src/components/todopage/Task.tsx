import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as Style from './TodoStyle';

const Task = ({ info, onMarkDone, onDelete }) => {
  const [isHavor, setIsHavor] = useState(false);

  const renderTask = (isDone) => {
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
          // if(info.done){} (
          //   <Style.TaskInfoDate data-testid="test-date">{info.date}</Style.TaskInfoDate>
          //  ) : (
          //   <>
          //     <button type="button" data-testid="test-done-button" onClick={() => onMarkDone(info)}>
          //       Mark as done
          //     </button>
          //     <button type="button" data-testid="test-delete-button" onClick={() => onDelete(info)}>
          //         Delete
          //     </button>
          //   </>
          //  )
        }
      </Style.TaskInfoBlock>
    </Style.TaskInfoRow>
  );
};

// Task.propTypes = {
//   info: PropTypes.shape({
//     done: PropTypes.bool,
//     name: PropTypes.string,
//     date: PropTypes.string,
//   }).isRequired,
//   onMarkDone: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// Task.defaultProps = {};

export default Task;
