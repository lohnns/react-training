import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameInfo from "./GameInfo";

it('should display empty component', function () {
    const wrapper = shallow(<GameInfo/>);
    expect(wrapper).to.contain(<div></div>);
});