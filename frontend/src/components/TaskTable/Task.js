import React from 'react';
import PropTypes from 'prop-types';
import * as Style from '../../Style';

const Task = ({ info, onMarkDone, onDelete }) => {
  const date = info.isFinish ? info.date : '';
  return (
    <Style.TaskInfoRow>
      <Style.TaskInfoName isFinish={info.isFinish}>{info.name}</Style.TaskInfoName>
      <Style.TaskInfoBlock>
        {info.isFinish ? (
          <Style.TaskInfoDate>{date}</Style.TaskInfoDate>
        ) : (
          <>
            <button type="button" onClick={() => onMarkDone(info)}>Mark as done</button>
            <button type="button" onClick={() => onDelete(info)}>Delete</button>
          </>
        )}
      </Style.TaskInfoBlock>
    </Style.TaskInfoRow>
  );
};

Task.propTypes = {
  info: PropTypes.shape({
    isFinish: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onMarkDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {};

export default Task;
