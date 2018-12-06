import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import InputFormField from '../src';
import util from '../src/util';

Enzyme.configure({ adapter: new Adapter() });

const { LeftAddon, RightAddon, Count } = InputFormField;

sinon.spy(InputFormField.prototype, 'handleFocus');
sinon.spy(InputFormField.prototype, 'handleBlur');
sinon.spy(InputFormField.prototype, 'handleKeyDown');
const clearTimerSpy = sinon.spy(InputFormField.prototype, 'clearTimer');

describe('util', () => {
  it('getIEVer', () => {
    expect(util.getIEVer()).to.be(0);
  });

  it('trim', () => {
    expect(util.trim(' test ')).to.be('test');
  });
});

describe('InputFormField', () => {
  let instance;

  it('autoTrim', (done) => {
    instance = mount(
      <InputFormField autoTrim standalone />,
    );
    instance.find('.kuma-input').instance().value = ' a b ';
    instance.find('.kuma-input').simulate('change');
    setTimeout(() => {
      expect(instance.find('.kuma-input').instance().value).to.be(' a b ');
    }, 400);
    setTimeout(() => {
      expect(instance.find('.kuma-input').instance().value).to.be('a b');
      done();
    }, 600);
  });

  it('clear autoTrim timer on unmount', () => {
    instance = mount(
      <InputFormField autoTrim standalone />,
    );
    instance.find('.kuma-input').instance().value = 'a';
    instance.find('.kuma-input').simulate('change');
    clearTimerSpy.reset();
    instance.unmount();
    expect(clearTimerSpy.calledOnce).to.be(true);
  });

  it('jsxdisabled or autocomplete', () => {
    instance = mount(
      <InputFormField jsxdisabled standalone autoComplete={false} />,
    );
    expect(instance.find('.kuma-input').instance().disabled).to.be(true);
    expect(instance.find('.kuma-input').instance().autocomplete).to.be('off');
  });

  it('inputType', () => {
    instance = mount(
      <InputFormField inputType="password" standalone />,
    );
    expect(instance.find('.kuma-input').instance().type).to.be('password');
  });

  it('IECompatible', () => {
    instance = mount(
      <InputFormField jsxplaceholder="test" IECompatible={false} standalone />,
    );
    expect(instance.find('.kuma-input').instance().placeholder).to.be('test');
  });

  it('handleFocus method', () => {
    instance = mount(<InputFormField standalone />);
    instance.find('.kuma-input').simulate('focus');
    expect(InputFormField.prototype.handleFocus.calledOnce).to.equal(true);
  });

  it('handleBlur method', () => {
    instance = mount(<InputFormField validateOnBlur standalone />);
    instance.find('.kuma-input').simulate('blur');
    expect(InputFormField.prototype.handleBlur.calledOnce).to.equal(true);
  });

  it('handleKeyDown method', () => {
    instance = mount(<InputFormField standalone />);
    instance.find('.kuma-input').simulate('keyDown');
    expect(InputFormField.prototype.handleKeyDown.calledOnce).to.equal(true);
  });


  it('FormCount', () => {
    instance = mount(<InputFormField standalone>
      <Count total={20} />
    </InputFormField>);
    expect(instance.find('.kuma-uxform-count')).to.have.length(1);
    expect(instance.find('.kuma-uxform-count-max').text()).to.be('20');
  });


  it('FormCount prefixCls', () => {
    instance = mount(<InputFormField standalone>
      <Count prefixCls="test_count" length={22} total={20} />
    </InputFormField>);
    expect(instance.find('.test_count')).to.have.length(1);
    expect(instance.find('.test_count-actual')).to.have.length(1);
    expect(instance.find('.test_count-slash')).to.have.length(1);
    expect(instance.find('.test_count-max').text()).to.be('20');
  });

  it('FormCount length', () => {
    instance = mount(<InputFormField standalone value="test">
      <InputFormField.Count length={3} prefixCls="test_count" total={20} />
    </InputFormField>);
    expect(instance.find('.test_count')).to.have.length(1);
    expect(instance.find('.test_count-actual').text()).to.be('4');
  });


  it('LeftAddon', () => {
    instance = mount(<InputFormField standalone><LeftAddon>
        test
    </LeftAddon></InputFormField>);
    expect(instance.find('.kuma-uxform-left-icon')).to.have.length(1);
    expect(instance.find('.kuma-input').hasClass('kuma-uxform-input-has-left')).to.be(true);
  });


  it('RightAddon', () => {
    instance = mount(<InputFormField standalone><RightAddon>
        test
    </RightAddon></InputFormField>);
    expect(instance.find('.kuma-uxform-right-icon')).to.have.length(1);
    expect(instance.find('.kuma-input').hasClass('kuma-uxform-input-has-right')).to.be(true);
  });


  it('jsxmode view', () => {
    instance = mount(<InputFormField standalone jsxmode="view" value="test" />);
    expect(instance.find('.kuma-uxform-field-content').text()).to.be('test');
  });
});
