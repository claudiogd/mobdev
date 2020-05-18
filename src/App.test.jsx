import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

import NoEncontrado from './components/NoEncontrado';

describe("MobDev testing", () => {

  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<App />);
  });

  test('renders BrowserRouter element', () => {
    expect(wrapper.find('BrowserRouter'));
  });

  test('renders Router element', () => {
    expect(wrapper.find('Router'));
  });

  test('renders Switch element', () => {
    expect(wrapper.find('Switch'));
  })

  test('renders Route element', () => {
    expect(wrapper.find('Route'));
  });

  test('renders NoEncontrado element', () => {
    expect(wrapper.find(<NoEncontrado />));
  });

})