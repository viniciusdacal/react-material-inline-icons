import React from 'react';
import SvgIcon from '../SvgIcon';

const PowerPlug = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z' />
    </SvgIcon>
  );
};

export default PowerPlug;