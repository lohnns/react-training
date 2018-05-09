import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import App from './App';

it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).to.contain(<h1 className="App-title">Arena Keeper</h1>);
});
