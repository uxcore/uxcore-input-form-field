import classnames from 'classnames';
import React from 'react';

const LeftAddon = props => (
  <div
    className={classnames({
      'kuma-uxform-left-icon': true,
      'kuma-uxform-left-icon-focus': props.focus,
      'kuma-uxform-left-icon-hover': props.hover,
    })}
  >
    {props.children}
  </div>
);

LeftAddon.defaultProps = {};

/* eslint-disable react/require-default-props */
LeftAddon.propTypes = {
  focus: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  children: React.PropTypes.any,
};
/* eslint-enable react/require-default-props */

LeftAddon.displayName = 'LeftAddon';

export default LeftAddon;
