import React from 'react';
import SvgIcon from '../SvgIcon';

const EmailOutline = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z' />
    </SvgIcon>
  );
};

export default EmailOutline;
