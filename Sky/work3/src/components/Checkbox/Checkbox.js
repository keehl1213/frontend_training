
import React, { useState } from "react";
import {
  Box
} from './style';

const Checkbox = ({ data }) => {

  const change = () => {
    data.isCheck = !data.isCheck;
  };

  return (
    <Box>
      <input type="checkbox" id={data.value} value={data.isCheck} onChange={change} />
      <label htmlFor={data.value}>{data.value}</label>
    </Box>
  );
};

export default Checkbox;
