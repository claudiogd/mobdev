import React from 'react';
import { shallow } from 'enzyme';
import Imagenes, {CardImage} from '../Imagenes';
import { Grid } from '@material-ui/core';

describe('<Imagenes />', () => {
    const list = [{
        breeds: [{
            name: "affenpinscher",
            selected: true, 
            images:["https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg"],
            subBreeds: []
        },
        {
            name:"bulldog",
            selected: false,
            subBreeds: [{
                name: "english",
                selected: true,
                images: ["https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg"]
            }]
        }]
    }];

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Imagenes breeds={list} />);
    });

    test('render a Grid', () => {
        expect(wrapper.find(Grid).length).toBe(1);
    });

    test('render a Card', () => {
        expect(wrapper.find(CardImage).length).toBe(2);
    });
});