import React from 'react';
import { shallow } from 'enzyme';
import Fichas from '../Fichas';
import { Chip } from '@material-ui/core';

describe('<Fichas />', () => {

    const selected = ["affenpinscher","african"];
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Fichas selected={selected} />);
    });

    test('render a Chip', () => {
        expect(wrapper.find(Chip).length).toBe(2);
    });

});