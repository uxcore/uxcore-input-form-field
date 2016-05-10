/**
 * InputFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let InputFormField = require('../src');
let {LeftAddon, RightAddon, Count} = InputFormField;
let Form = require('uxcore-form/build/Form');
let Validators = require('uxcore-validator');

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
                <Form>
                    <InputFormField
                         required={true}
                         jsxname="test1"
                         jsxdisabled={false}
                         autoTrim={false}
                         jsxlabel="普通输入框"
                         jsxtips="请输入数字"
                         validateOnBlur={false}
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