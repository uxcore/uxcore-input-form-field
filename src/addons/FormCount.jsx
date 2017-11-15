import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FormCount = props => (
  <div
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
  </div>
);

FormCount.defaultProps = {
  prefixCls: 'kuma-uxform-count',
};

/* eslint-disable react/require-default-props */
FormCount.propTypes = {
  prefixCls: PropTypes.string,
  length: PropTypes.number,
  total: PropTypes.number,
};
/* eslint-enable react/require-default-props */

FormCount.displayName = 'FormCount';

export default FormCount;
