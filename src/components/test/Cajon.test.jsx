import React from 'react';
import {shallow} from 'enzyme';
import Cajon from '../Cajon';
import Listas from '../Listas';
import { Divider, Drawer } from '@material-ui/core';

describe('<Cajon />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Cajon />);
    });

    test('render a Drawer', () => {
        expect(wrapper.find(Drawer)).toHaveLength(1);
    });

    test('render a makeStyles-toolbar-3', () => {
        expect(wrapper.find('.makeStyles-toolbar-3')).toHaveLength(1);
    });

    test('render a Divider', () => {
        expect(wrapper.find(Divider)).toHaveLength(1);
    });

    test('render a Listas component', () => {
        expect(wrapper.find(Listas)).toHaveLength(1);
    })
});