
import React, { useState, useEffect, useRef } from "react";
import {
  InputRow,
  Icon,
  Input
} from './style';

const InputDiv = ({value, placeholder, onChange, onClick, icon}) => {
  const inputRef = useRef(null);

  useEffect(() => {
      if (value) {
        inputRef.current.focus();
      }
    }, [value]);

  const change = (event) => {
    onChange(event.target.value);
  };

  return (
    <InputRow>
      <Icon src={icon} onClick={onClick} />
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        ref={inputRef}
        onChange={change}
      />
    </InputRow>
  );
};

export default InputDiv;
