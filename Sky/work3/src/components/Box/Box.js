import React from 'react';
import * as Style from './style';

const Box = ({ children, height }) => (
  <Style.Box height={height}>
    {children}
  </Style.Box>
);

export default Box;
