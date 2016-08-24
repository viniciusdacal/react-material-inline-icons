import React from 'react';
import SvgIcon from '../SvgIcon';

const ChartBar = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z' />
    </SvgIcon>
  );
};

export default ChartBar;
