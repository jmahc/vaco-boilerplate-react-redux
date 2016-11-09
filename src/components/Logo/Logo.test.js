import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('renders children correctly', () => {
    const wrapper = render(
      <Logo />
    );
    expect(wrapper.find('iframe').length).to.eq(1);
  });
});
