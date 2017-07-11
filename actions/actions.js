import * as types from './types';

export function insertCoin (coin) {
    return {
        type: types.INSERT_COIN,
        coin
    }
}

export function replenishStock (code, quantity) {
    return {
        type:types.REPLENISH_STOCK,
        code,
        quantity
    }
}

export function dispenseItem (code) {
    return {
        type:types.DISPENSE_ITEM,
        code
    }
}
