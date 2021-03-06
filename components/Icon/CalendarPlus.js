import React from 'react';
import SvgIcon from '../SvgIcon';

const CalendarPlus = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M19,19V7H5V19H19M16,1H18V3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1M11,9H13V12H16V14H13V17H11V14H8V12H11V9Z' />
    </SvgIcon>
  );
};

export default CalendarPlus;
