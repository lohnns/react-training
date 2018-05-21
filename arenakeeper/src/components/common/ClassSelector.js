import React from 'react';

import {CLASSES} from '../../scenes/App/App.constants';

import './ClassSelector.css';

const ClassSelector = ( {defaultValue} ) => (
    <span className='class-selector'>
        <img src={window.location.origin + `/icons/${defaultValue}.png`} alt=''/>
        <select className='select-input' defaultValue={defaultValue}>
            {
                CLASSES.map(classValue => <option key={classValue} value={classValue}>{classValue}</option>)
            }
        </select>
    </span>
);

export default ClassSelector;
