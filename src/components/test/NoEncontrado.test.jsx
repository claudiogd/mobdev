import React from 'react';
import { shallow } from 'enzyme';
import { Paper, Typography, Button } from '@material-ui/core';
import {Home} from '@material-ui/icons';

import NoEncontrado from '../NoEncontrado';

describe('Tests a componente NoEncontrado', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NoEncontrado />);
    });

    test('render a Paper', () => {
        expect(wrapper.find(Paper).length).toBe(1);
    });

    test('render 2 Typography', () => {
        expect(wrapper.find(Typography).length).toBe(2);
    });

    test('first Typography contains "404" text', () => {
        expect(wrapper.find(Typography).first().text()).toContain('404');
    });

    test('second Typography contains "Página no encontrada" text', () => {
        expect(wrapper.find(Typography).last().text()).toContain('Página no encontrada');
    });

    test('render a Button', () => {
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('render a Home icon', () => {
        expect(wrapper.find(Home).length).toBe(1);
    });
    
});