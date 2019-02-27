/**
 * InputFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import Form from 'uxcore-form/build/Form';

import Validators from 'uxcore-validator';
import React from 'react';
import InputFormField from '../src';

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
            <RightAddon>
              <span>很长的单位/元</span>
            </RightAddon>
            {/*<Count total={20} />*/}
          </InputFormField>
        </Form>

      </div>
    );
  }
}

export default Demo;
