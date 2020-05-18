import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

describe('<Navbar />', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Navbar />);
    });

    test('render a AppBar', () => {
        expect(wrapper.find(AppBar).length).toBe(1);
    });

    test('render a Toolbar', () => {
        expect(wrapper.find(Toolbar).length).toBe(1);
    });

    test('render a IconButton', () => {
        expect(wrapper.find(IconButton).length).toBe(1);
    });

    test('render a MenuIcon', () => {
        expect(wrapper.find(MenuIcon).length).toBe(1);
    });

    test('render a Typography', () => {
        expect(wrapper.find(Typography).length).toBe(1);
    });
});