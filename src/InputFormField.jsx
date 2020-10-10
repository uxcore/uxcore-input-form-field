/**
 * InputFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'uxcore-form-field';
import Constants from 'uxcore-const';
import classnames from 'classnames';
import assign from 'object-assign';
import util from './util';
import FormCount from './addons/FormCount';
import LeftAddon from './addons/LeftAddon';
import RightAddon from './addons/RightAddon';


/**
 * extend FormField, rewrite renderField method
 */
class InputFormField extends FormField {
  componentWillUnmount() {
    super.componentWillUnmount();
    this.clearTimer();
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  handleChange(e) {
    const me = this;
    const { autoTrim } = me.props;
    let value = e.currentTarget.value;
    if (autoTrim) {
      me.clearTimer();
      me.timer = setTimeout(() => {
        value = util.trim(value);
        me.handleDataChange(me.deFormatValue(value));
      }, 500);
    }
    me.handleDataChange(me.deFormatValue(value));
  }

  handleFocus(e) {
    this.setState({
      focus: true,
    });
    this.props.onFocus(e);
  }

  handleBlur(e) {
    const me = this;
    me.setState({
      focus: false,
    });
    let pass = true;
    if (me.props.validateOnBlur) {
      pass = me.doValidate();
    }
    me.props.onBlur(e, pass);
  }

  handleMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  handleKeyDown(e) {
    const me = this;
    me.props.onKeyDown(e);
  }

  /* eslint-disable class-methods-use-this */

  formatValue(value) {
    return value;
  }

  deFormatValue(value) {
    return value;
  }

  addSpecificClass() {
    return 'kuma-input-uxform-field';
  }

  /* eslint-enable class-methods-use-this */

  getCount() {
    const me = this;
    const children = me.props.children;
    let element;
    React.Children.map(children, (child) => {
      if (child && typeof child.type === 'function' && child.type.displayName === 'FormCount') {
        element = child;
      }
    });
    if (element) {
      const total = element.props.total;
      const Count = React.cloneElement(element, {
        length: me.state.value ? me.state.value.length : 0,
        key: 'count',
      });

      return {
        element: Count,
        total,
      };
    }
    return null;
  }

  renderLeftAddon() {
    const me = this;
    const children = me.props.children;
    let element;
    React.Children.map(children, (child) => {
      if (child && typeof child.type === 'function' && child.type.displayName === 'LeftAddon') {
        element = child;
      }
    });
    if (element) {
      return React.cloneElement(element, {
        focus: me.state.focus,
        hover: me.state.hover,
        key: 'left',
      });
    }
    return null;
  }

  renderRightAddon() {
    const me = this;
    const children = me.props.children;
    let element;
    React.Children.map(children, (child) => {
      if (child && typeof child.type === 'function' && child.type.displayName === 'RightAddon') {
        element = child;
      }
    });

    if (element) {
      return React.cloneElement(element, {
        key: 'right',
      });
    }
    return null;
  }

  renderField() {
    const me = this;
    const arr = [];
    const mode = me.props.jsxmode || me.props.mode;
    const count = me.getCount();
    const leftAddon = me.renderLeftAddon();
    const rightAddon = me.renderRightAddon();
    if (mode === Constants.MODE.EDIT) {
      if (leftAddon) {
        arr.push(leftAddon);
      }
      const IEver = util.getIEVer();
      const placeholder = (IEver >= 10 && me.props.IECompatible) ? '' : me.props.jsxplaceholder;
      const value = util.isNil(me.state.formatValue) ? '' : me.formatValue(me.state.formatValue);
      const size = this.getSize();
      arr.push(<input
        className={classnames({
          'kuma-input': true,
          'kuma-uxform-input-has-right': !!count || !!rightAddon,
          'kuma-uxform-input-has-left': !!leftAddon,
          [`kuma-input-${size}-size`]: !!size,
        })}
        key={me.props.inputType}
        type={me.props.inputType}
        placeholder={placeholder}
        title={me.props.inputType === 'password' ? '' : (value || placeholder) }
        disabled={(me.props.jsxdisabled === 'disabled' || me.props.jsxdisabled === true) ? 'disabled' : ''}
        name={me.props.jsxname}
        value={value}
        onMouseEnter={(e) => { me.handleMouseEnter(e); }}
        onMouseLeave={(e) => { me.handleMouseLeave(e); }}
        onFocus={(e) => { me.handleFocus(e); }}
        onBlur={(e) => { me.handleBlur(e); }}
        onChange={(e) => { me.handleChange(e); }}
        onKeyDown={(e) => { me.handleKeyDown(e); }}
        autoComplete={me.props.autoComplete ? 'on' : 'off'}
      />);

      if (rightAddon) {
        arr.push(rightAddon);
      } else if (count) {
        arr.push(count.element);
      }
    } else if (mode === Constants.MODE.VIEW) {
      arr.push(
        <span key="text" title={me.state.formatValue}>
          {me.props.renderView(me.state.formatValue)}
        </span>
      );
    }
    return (
      <div className="kuma-uxform-input">
        {arr}
      </div>
    );
  }
}

InputFormField.Count = FormCount;
InputFormField.LeftAddon = LeftAddon;
InputFormField.RightAddon = RightAddon;
InputFormField.propTypes = assign({}, FormField.propTypes, {
  IECompatible: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  renderView: PropTypes.func,
  validateOnBlur: PropTypes.bool,
  autoTrim: PropTypes.bool,
  inputType: PropTypes.string,
  autoComplete: PropTypes.bool
});
InputFormField.defaultProps = assign({}, FormField.defaultProps, {
  IECompatible: true,
  onBlur: () => { },
  onFocus: () => { },
  onKeyDown: () => { },
  renderView: value => value || value === 0 ? value : '--',
  validateOnBlur: false,
  inputType: 'text',
  autoComplete: true
});
InputFormField.displayName = 'InputFormField';
export default InputFormField;
