import React from 'react';
import {shallow} from 'enzyme';
import Contenedor from '../Contenedor';
import Navbar from '../Navbar';
import { Hidden } from '@material-ui/core';
import Cajon from '../Cajon';
import Cuerpo from '../Cuerpo';

describe('<Contenedor />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contenedor />);
    });

    test('render a Navbar', () => {
        expect(wrapper.find(Navbar).length).toBe(1);
    });

    test('render Hidden count 2', () => {
        expect(wrapper.find(Hidden).length).toBe(2);
    });

    test('render a Cajon component count 2', () => {
        expect(wrapper.find(Cajon).length).toBe(2);
    });

    test('render a Cuerpo component', () => {
        expect(wrapper.find(Cuerpo).length).toBe(1);
    });
});