import React from 'react';
import PropTypes from 'prop-types';

const RightAddon = props => (
  <div className="kuma-uxform-right-icon " style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
    {props.children}
  </div>
);

RightAddon.defaultProps = {};

/* eslint-disable react/require-default-props */
RightAddon.propTypes = {
  children: PropTypes.any,
};
/* eslint-enable react/require-default-props */

RightAddon.displayName = 'RightAddon';

export default RightAddon;
