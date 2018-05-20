import React from 'react';
import {expect} from 'chai';
import {render, shallow} from 'enzyme';

import ClassSelector from "./ClassSelector";

describe('ClassSelector tests suite', () => {
    it('is a span wrapping selector', () => {
        const wrapper = render(<ClassSelector/>);
        expect(wrapper.is('span.class-selector')).to.equal(true);
    });

    it('contains a select input', () => {
        const wrapper = render(<ClassSelector/>);
        expect(wrapper.find('select.select-input').length).to.equal(1);
    });

    it('contains 9 options', () => {
        const wrapper = render(<ClassSelector/>);
        expect(wrapper.find('.select-input > option').length).to.equal(9);
    });
});

