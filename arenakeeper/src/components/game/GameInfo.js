import React, {Component} from 'react';

import './GameInfo.scss';

class GameInfo extends Component {

    render() {
        return (
            <div id='game-info' className='game-info-container'>
                <div>Number</div>
                <div>Win</div>
            </div>
        );
    }

}

export default GameInfo;