import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as Style from './TodoStyle.js';

const TodoInput = ({doAdd, doClearDone}) => {
  const [inputName, setInputName] = useState("");
  const onInputChange = (e) => {
    setInputName(e.target.value);
  };

  const onAdd = (name) => {
    if (name.trim() === "") return;
    doAdd(name);
    setInputName("");
  };

  return (
    <Style.InputBox>
      <Style.Input type="text" data-testid="test-input" value={inputName} placeholder="Add your task here…" onChange={onInputChange} />
      <button type="button" data-testid="test-add-button" onClick={() => onAdd(inputName)}>Add</button>
      <button type="button" data-testid="test-clear-button" onClick={doClearDone}>Clear Done</button>
    </Style.InputBox>
  );
};

TodoInput.propTypes = {
  doAdd: PropTypes.func.isRequired,
  doClearDone: PropTypes.func.isRequired,
};

export default TodoInput;
