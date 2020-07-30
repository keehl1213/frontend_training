
import React, { useState } from "react";
import {
  Box
} from './style';

const Checkbox = ({ value, name, onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const change = (event) => {
    setIsChecked(!isChecked);
    onChange(isChecked, event.target.value);
  };

  return (
    <Box>
      <input type="checkbox" id={value} value={name} onChange={change} checked={isChecked} />
      <label htmlFor={value}>{name}</label>
    </Box>
  );
};

export default Checkbox;
