import React from 'react';
import * as Style from './style';

const Snofbug = ({ children, placeholder, height }) => (
  <Style.Box height={height}>
    {placeholder}
    {children}
  </Style.Box>
);

export default Snofbug;
