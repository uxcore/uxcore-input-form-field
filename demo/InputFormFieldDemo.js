/**
 * InputFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const InputFormField = require('../src');
const {LeftAddon, RightAddon, Count} = InputFormField;
const Form = require('uxcore-form/build/Form');
const Validators = require('uxcore-validator');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleKeyDown() {

    }

    render() {
        let me = this;
        return (
            <div>
                <Form jsxvalues={{
                    // test1: "测试"
                }}>
                    <InputFormField
                         required={true}
                         jsxname="test1"
                         jsxdisabled={false}
                         autoTrim={false}
                         jsxlabel="普通输入框"
                         jsxtips="请输入数字"
                         jsxplaceholder="输入"
                         onKeyDown={me.handleKeyDown.bind(me)}
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}>
                            <LeftAddon>
                                <i className="kuma-icon kuma-icon-phone"></i>
                            </LeftAddon>
                            <RightAddon>
                                <span>元</span>
                            </RightAddon>
                            <Count total={20}/>
                        </InputFormField>
                </Form>

            </div>
        );
    }
};

module.exports = Demo;
