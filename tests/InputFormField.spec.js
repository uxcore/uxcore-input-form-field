import expect from 'expect.js';
import React from 'react';
// import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import InputFormField from '../src';

//import sinon from 'uxcore-tools/node_modules/sinon';
import sinon from 'sinon';


describe('InputFormField', () => {
  let instance;
  it('autoTrim', () => {
    instance = mount(
      <InputFormField ref="root" autoTrim standalone />,
    );
    instance.node.refs.root.value = 'test ';
    instance.find('.kuma-input').simulate('change');
    expect(instance.node.refs.root.value).to.be('test');
  });


  it('allows us to set autoTrim props', () => {
    const wrapper = mount(<InputFormField ref="root" autoTrim standalone />);
    expect(wrapper.props().autoTrim).to.equal(true);
    wrapper.setProps({ autoTrim: false });
    expect(wrapper.props().autoTrim).to.equal(false);
  });


  it('inputType', () => {
    instance = mount(
      <InputFormField ref="root" inputType="password" standalone />,
    );
    expect(instance.node.refs.root.type).to.be('password');
  });

  it('jsxplaceholder', () => {
    instance = mount(
      <InputFormField ref="root" jsxplaceholder="test" standalone />,
    );

    debugger
    expect(instance.find('.kuma-input[placeholder="test"]').length).to.be(1);
  });

  it('jsxdisabled', () => {
    instance = mount(
      <InputFormField ref="root" jsxdisabled={false} standalone />,
    );

    // expect(instance.find('.kuma-input[disabled=true]').length).to.be(1);
  });

  // https://github.com/airbnb/enzyme/blob/master/README.md
  it('calls componentDidMount', () => {
    sinon.spy(InputFormField.prototype, 'componentDidMount');
    const wrapper = mount(<InputFormField ref="root" standalone />);
    expect(InputFormField.prototype.componentDidMount).to.have.property('callCount', 1);
    InputFormField.prototype.componentDidMount.restore();
  });


  it('trim method', () => {
    sinon.spy(InputFormField.prototype, 'trim');
    const wrapper = mount(<InputFormField ref="root" standalone />);
    const output = expect(InputFormField.prototype.trim).to.have.obj(' test ');
    expect(output).to.be('test');
  });


it('getCount method', () => {
    sinon.spy(InputFormField.prototype, 'getCount');
    const wrapper = mount(<InputFormField ref="root" standalone><InputFormField.Count total={20}>abc</InputFormField.Count></InputFormField>);
    const output = expect(InputFormField.prototype.getCount).to.have.obj();
    //expect(output).to.be('test');
  });


});
