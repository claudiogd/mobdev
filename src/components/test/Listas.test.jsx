import React from 'react';
import { shallow } from 'enzyme';
import Listas from '../Listas';
import { List } from '@material-ui/core';

describe('<Listas />', () => {
    const list = [{
        letter: "A",
        breeds: [{
            name: "affenpinscher",
            selected: true, 
            subBreeds: []
        }]},
        {
            letter: "B",
            breeds: [{
                name:"bulldog",
                selected: false,
                subBreeds: [{
                    name: "english",
                    selected: true
                }]
        }]
    }];

    const list2 = [{
        letter: "A",
        breeds: [{
            name: "affenpinscher",
            selected: true, 
            subBreeds: []
        }]}
    ];

    const list3 = [
        {
            letter: "B",
            breeds: [{
                name:"bulldog",
                selected: false,
                subBreeds: [{
                    name: "english",
                    selected: true
                }]
        }]
    }];

    test('render 4 List', () => {
        const wrapper = shallow(<Listas breeds={list} />);
        expect(wrapper.find(List).length).toBe(4);
    });

    test('render 2 List', () => {
        const wrapper = shallow(<Listas breeds={list2} />);
        expect(wrapper.find(List).length).toBe(2);
    });

    test('render 3 List', () => {
        const wrapper = shallow(<Listas breeds={list3} />);
        expect(wrapper.find(List).length).toBe(3);
    });

});