import React from 'react';
import Buttons from './';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing <Buttons/>', () => {
    it('Buttons have rendered correctly', () => {
        const buttons = shallow(<Buttons />);
        expect(toJson(buttons)).toMatchSnapshot();
    });
})