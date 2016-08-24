import React from 'react';
import SvgIcon from '../SvgIcon';

const PlaylistPlus = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z' />
    </SvgIcon>
  );
};

export default PlaylistPlus;
