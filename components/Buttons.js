import React, {Component} from 'react';
import initialState from '../reducers/initialState';
import reducer from '../reducers/reducers';
import '../public/css/VendingMachine.css';
import _ from 'lodash';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

class Buttons extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="buttons">
               <button onClick={this.props.dispenseItem.bind(null, this.props.name)}>A1</button>
               <button>A2</button>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispenseItem: (name) => {
            dispatch(actions.dispenseItem(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(Buttons);