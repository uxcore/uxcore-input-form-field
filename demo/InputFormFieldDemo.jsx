/**
 * InputFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const Form = require('uxcore-form/build/Form');
const Validators = require('uxcore-validator');
const React = require('react');

const InputFormField = require('../src');

const { LeftAddon, RightAddon, Count } = InputFormField;

const handleKeyDown = (e) => {
  console.log(e);
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Form
          jsxvalues={{
          // test1: "测试"
          }}
        >
          <InputFormField
            required
            jsxname="test1"
            jsxdisabled={false}
            autoTrim={false}
            jsxlabel="普通输入框"
            jsxtips="请输入数字"
            jsxplaceholder="输入"
            onKeyDown={handleKeyDown}
            jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
          >
            <LeftAddon>
              <i className="kuma-icon kuma-icon-phone" />
            </LeftAddon>
            {/* <RightAddon>
              <span>元</span>
            </RightAddon> */}
            <Count total={20} />
          </InputFormField>
        </Form>

      </div>
    );
  }
}

module.exports = Demo;
