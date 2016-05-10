
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "文本",
    category: "表单",
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "InputFormField",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: true,
    isContainer: false,
    canDropto: function(container) {
        let name = container.getComponentName();
        return /FormRow|Form/.test(name);
    },
    canDroping: false,
    configure: [{
            name: "jsxlabel",
            title: "标签名",
            defaultValue: "表单一",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxname",
            title: "表单域name",
            defaultValue: "select1",
            required: true,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxplaceholder",
            title: "占位符",
            defaultValue: "请输入",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "instantValidate",
            title: "即时校验",
            defaultValue: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }, {
            name: "jsxshow",
            title: "是否显示",
            defaultValue: true,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }, {
            name: "jsxmode",
            title: "模式",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxshowLabel",
            title: "是否显示标签",
            defaultValue: true,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }, {
            name: "jsxflex",
            title: "弹性比例(flex)",
            defaultValue: 1,
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <NumberSetter />
        }, {
            name: "jsxtips",
            title: "提示文案",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }]
});
