import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as Style from './TodoStyle.js';

const TodoInput = ({doAdd, doClearDone}) => {
  const [inputName, setInputName] = useState("");
  const onInputChange = (e) => {
    setInputName(e.target.value);
  };

  const onAdd = () => {
    if (inputName.trim() === "") return;
    doAdd(inputName);
    setInputName("");
  };

  return (
    <Style.InputBox>
      <Style.Input type="text" value={inputName} placeholder="Add your task here…" onChange={onInputChange} />
      <button type="button" onClick={onAdd}>Add</button>
      <button type="button" onClick={doClearDone}>Clear Done</button>
    </Style.InputBox>
  );
};

TodoInput.propTypes = {
  doAdd: PropTypes.func.isRequired,
  doClearDone: PropTypes.func.isRequired,
};

export default TodoInput;
