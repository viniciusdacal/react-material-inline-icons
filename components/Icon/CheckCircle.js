import React from 'react';
import SvgIcon from '../SvgIcon';

const CheckCircle = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z' />
    </SvgIcon>
  );
};

export default CheckCircle;
