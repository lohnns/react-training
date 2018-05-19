import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameRow from "./GameRow";

it('renders four cells', function () {
    const wrapper = shallow(<GameRow/>);
    expect(wrapper.find('td')).to.have.length(4);
});