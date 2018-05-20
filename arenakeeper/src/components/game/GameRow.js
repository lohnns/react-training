import React, {Component} from 'react';

import ClassSelector from "../common/ClassSelector";

import './GameRow.scss';

class GameInfo extends Component {

    render() {
        return (
            <tr>
                <td>#1</td>
                <td><ClassSelector/></td>
                <td>WIN</td>
                <td>COIN</td>
            </tr>
        );
    }

}

export default GameInfo;