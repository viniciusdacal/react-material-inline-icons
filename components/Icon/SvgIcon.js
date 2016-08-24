import React from 'react';

const SvgIcon = (props) => (
  <svg {...props} />
);

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
};

export default SvgIcon;
