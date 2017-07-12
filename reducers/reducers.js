import * as types from '../actions/types';
import changeCalculator from './changeCalculator'
import initialState from './initialState';

export default function reducer(prevState = initialState, action) {
    if (!action) return prevState;
    if (action.type === types.INSERT_COIN) {
        const newState = Object.assign({}, prevState);
        newState.credit = newState.credit.concat([action.coin]);
        let totalCredit = 0;
        for (let i = 0; i < newState.credit; i++) {
            totalCredit += Number(newState.credit[i]);
        }
        newState.displayMessage = 'Credit: ' + '£' + totalCredit.toFixed(2);
        return newState;
    }
    if (action.type === types.REPLENISH_STOCK) {
        if (!action.quantity || !action.code) return prevState;
        const newState = Object.assign({}, prevState);
        newState.stock = Object.assign({}, newState.stock);
        newState.stock[action.code] = Object.assign({}, newState.stock[action.code]);
        newState.stock[action.code].quantity += action.quantity;
        return newState;
    }
    if (action.type === types.DISPENSE_ITEM) {
        if (!action.code) return prevState;
        const newState = Object.assign({}, prevState);
        console.log('****** first', newState.float)
        if (prevState.credit >= prevState.stock[action.code].price) {
            newState.stock = Object.assign({}, newState.stock);
            newState.stock[action.code] = Object.assign({}, newState.stock[action.code]);
            newState.stock[action.code].quantity--;
            newState.productDispenser = newState.stock[action.code].name
            newState.credit = newState.credit - prevState.stock[action.code].price
            if (newState.credit > 0) {
                newState.changeArea = newState.credit;
                let change = changeCalculator(newState.changeArea);
                newState.float = Object.assign({}, newState.float)
                for (let key in change) {
                    newState.float[key] = newState.float[key] - change[key]
                }
                console.log('last *****', newState.float)
                newState.credit = 0;
            }
        } else {
            newState.displayMessage = 'please sir, I have a family to feed'
        }
        return newState;
    }
    return prevState;
}

// function changeCalculator (change) {
//     let result = {};
//     let coins = [
//         200,
//         100,
//         50,
//         20,
//         10,
//         5,
//         2,
//         1
//     ];
//     for (var i = 0; i < coins.length; i++) {
//         coinCount = change / coins[i];
//         if (coinCount >= 1) {
//             if (result[coins[i]]) result[coins[i]] += Math.floor(coinCount);
//             else result[coins[i]] = Math.floor(coinCount);
//             change -= coins[i] * Math.floor(coinCount);
//         }
//     }
//     return result;
// }