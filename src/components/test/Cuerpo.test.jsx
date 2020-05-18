import React from 'react';
import { shallow } from 'enzyme';
import Cuerpo from '../Cuerpo';
import { Grid, Box } from '@material-ui/core';
import Fichas from '../Fichas';
import Imagenes from '../Imagenes';

describe('<Cuerpo />', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Cuerpo />);
    });

    test('render a Grid count 3', () => {
        expect(wrapper.find(Grid).length).toBe(3);
    });

    test('render a Box', () => {
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('render a Fichas', () => {
        expect(wrapper.find(Fichas).length).toBe(1);
    });

    test('render a Imagenes', () => {
        expect(wrapper.find(Imagenes).length).toBe(1);
    });
});