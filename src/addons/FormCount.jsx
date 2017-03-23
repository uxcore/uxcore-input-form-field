const classnames = require('classnames');
const React = require('react');

const FormCount = props => <div
  className={classnames(props.prefixCls, {
    [`${props.prefixCls}-overflow`]: parseInt(props.length, 10) > parseInt(props.total, 10),
  })}
>
  <span
    className={classnames({
      [`${props.prefixCls}-actual`]: true,
      [`${props.prefixCls}-actual-overflow`]: parseInt(props.length, 10) > parseInt(props.total, 10),
    })}
  >{props.length}</span>
  <span className={`${props.prefixCls}-slash`}>/</span>
  <span className={`${props.prefixCls}-max`}>{props.total}</span>
</div>;

FormCount.defaultProps = {
  prefixCls: 'kuma-uxform-count',
};
FormCount.propTypes = {
  prefixCls: React.PropTypes.string,
  length: React.PropTypes.number,
  total: React.PropTypes.number,
};

FormCount.displayName = 'FormCount';

module.exports = FormCount;
