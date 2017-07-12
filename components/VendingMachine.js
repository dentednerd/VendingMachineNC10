import React, {Component} from 'react';
import initialState from '../reducers/initialState';
import reducer from '../reducers/reducers';
import '../public/css/VendingMachine.css';
import _ from 'lodash';
import StockItem from './StockItem';
import Buttons from './Buttons';

export default class VendingMachine extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="vendingMachine">
                Hello mate<br />
                <ul>
                        {_.map(this.props.stock, (item, i) => <li key={i}><StockItem name={item.name} quantity={item.quantity} price={item.price} /></li>)}
                </ul>
                <Buttons />
            </div>
        )
    }
}