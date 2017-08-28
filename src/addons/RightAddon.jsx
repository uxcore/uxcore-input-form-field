import React from 'react';

const RightAddon = props => (
  <div className="kuma-uxform-right-icon ">
    {props.children}
  </div>
);

RightAddon.defaultProps = {};

/* eslint-disable react/require-default-props */
RightAddon.propTypes = {
  children: React.PropTypes.any,
};
/* eslint-enable react/require-default-props */

RightAddon.displayName = 'RightAddon';

export default RightAddon;
