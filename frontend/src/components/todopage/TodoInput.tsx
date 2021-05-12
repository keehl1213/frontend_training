import React, {useState} from 'react';
import * as Style from './TodoStyle';

type TodoInputProps = {
  doAdd: (name: string) => void;
  doClearDone: () => void;
};

const TodoInput = ({ doAdd, doClearDone } : TodoInputProps) => {
  const [inputName, setInputName] = useState('');
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };

  const onAdd = (name: string) : void => {
    if (name.trim() !== '') {
      doAdd(name);
      setInputName('');
    }
  };

  return (
    <Style.InputBox>
      <Style.Input type="text" data-testid="test-input" value={inputName} placeholder="Add your task here…" onChange={onInputChange} />
      <button type="button" data-testid="test-add-button" onClick={() => onAdd(inputName)}>Add</button>
      <button type="button" data-testid="test-clear-button" onClick={doClearDone}>Clear Done</button>
    </Style.InputBox>
  );
};

export default TodoInput;
