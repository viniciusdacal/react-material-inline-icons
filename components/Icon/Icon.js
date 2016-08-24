import React, { PropTypes } from 'react';
import Icons from './svg';

export const iconDimensions = {
  sm: '14px',
  md: '18px',
  lg: '24px',
};

const Icon = (props) => {
  const icon = Icons[props.name];
  const size = iconDimensions[props.size] || props.size;

  if (!props.width && !props.height) {
    props = { ...props, width: size, height: size };
  }

  return (React.cloneElement(icon({ style: {display: 'flex'}, ...props })));
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(Icons)),
  size: PropTypes.string,
  margin: PropTypes.string,
  title: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  title: 'icon',
  fill: 'currentColor',
  size: 'md',
};

export default Icon;
