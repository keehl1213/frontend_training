
import React from "react";
import {
  Box
} from './style';

const Checkbox = ({ data, onChange }) => {
  const { value } = data;

  const change = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <input type="checkbox" id={value} value={value} onChange={change} />
      <label htmlFor={value}>{value}</label>
    </Box>
  );
};

export default Checkbox;
