import React from 'react';
import ListHeader from './';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing <ListHeader/>', () => {
    it('ListHeader props', () => {
        const header = shallow(<ListHeader/>);
        expect(toJson(header)).toMatchSnapshot();
    })
})