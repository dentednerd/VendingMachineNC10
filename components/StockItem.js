import React, {Component} from 'react';
import initialState from '../reducers/initialState';
import reducer from '../reducers/reducers';
import '../public/css/VendingMachine.css';
import _ from 'lodash';

export default class StockItem extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="stockItem">
                <h2>
                {this.props.name}
                </h2>
                <span className='quantity'>
                {this.props.quantity} in stock
                </span>
                <br/>
                <span className='price'>
                £{this.props.price}
                </span>
            </div>
        )
    }
}