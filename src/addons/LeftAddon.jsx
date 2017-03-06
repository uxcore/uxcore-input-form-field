const classnames = require('classnames');
const React = require('react');

const LeftAddon = props => (
  <div
    className={classnames({
      'kuma-uxform-left-icon': true,
      'kuma-uxform-left-icon-focus': !!props.focus,
    })}
  >
    {props.children}
  </div>
);

LeftAddon.defaultProps = {};
LeftAddon.propTypes = {
  focus: React.PropTypes.bool,
  children: React.PropTypes.any,
};
LeftAddon.displayName = 'LeftAddon';

module.exports = LeftAddon;
