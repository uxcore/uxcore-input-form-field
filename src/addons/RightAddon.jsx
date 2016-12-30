const React = require('react');

const RightAddon = props => (
  <div className="kuma-uxform-right-icon ">
    {props.children}
  </div>
);

RightAddon.defaultProps = {};
RightAddon.propTypes = {
  children: React.PropTypes.any,
};
RightAddon.displayName = 'RightAddon';

module.exports = RightAddon;
