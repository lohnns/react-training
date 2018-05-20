import React from 'react';

import {CLASSES} from '../../scenes/App/App.constants';

import './ClassSelector.scss';

const ClassSelector = ( {defaultValue} ) => (
    <span className='class-selector'>
        <select className='select-input' defaultValue={defaultValue}>
            {
                CLASSES.map(classValue => <option key={classValue} value={classValue}>{classValue}</option>)
            }
        </select>
    </span>
);

export default ClassSelector;
