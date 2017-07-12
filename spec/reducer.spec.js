import {expect} from 'chai';
import {initialState, reducer} from '../reducers/reducers';
import * as actions from '../actions/actions';
 const tempState = {  
    stock: {    
        'A1': {     
             name: 'Mars Bar',      
             quantity: 10,      
             stuck: false,      
             price: 85    
            },    
            'A2': {      
                name: 'Kettle Crisps',      
                quantity: 10,      
                stuck: false,      
                price: 85    
            }  
        },  
        credit: [100],  
        changeArea: [],  
        float: {
            '200': 10,    
            '100': 10,    
            '50': 10,    
            '20': 10,
            '10': 10,
            '5': 10,
            '2': 10,
            '1': 10  
        }, 
        displayMessage: '',  
        selection: '', 
        productDispenser: '',  
        dispenserDoorOpen: false
};

describe('reducer', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function')
    });

    describe ('action INSERT_COIN', () => {
        it('updates the state correctly', () => {
            const action = actions.insertCoin(0.2);
            const newState = reducer(initialState, action);
            expect(newState.credit).to.eql([0.2]);
            expect(newState.displayMessage).to.equal('Credit: £0.20');
        });
    });

    describe('action REPLENISH_STOCK', () => {
        it('replenishes stock', () => {
            const action = actions.replenishStock('A1', 10);
            const newState = reducer(initialState, action);
            expect(newState.stock).to.eql({    
        'A1': {     
             name: 'Mars Bar',      
             quantity: 20,      
             stuck: false,      
             price: 0.85    
            },    
            'A2': {      
                name: 'Kettle Crisps',      
                quantity: 10,      
                stuck: false,      
                price: 0.85    
            }  
        })
        })
    })

    describe('action DISPENSE_ITEM', () => {
        it('dispense item if there is enough credit as well as change if there is any left', () => {
            const action = actions.dispenseItem('A1');
            const newState = reducer(tempState, action);
            expect(newState.productDispenser).to.equal('Mars Bar')
            expect(newState.stock[action.code].quantity).to.equal(9)
            expect(newState.changeArea).to.eql(15)
        })
         it('displays a message if not enough credit', () => {
             
            const action = actions.dispenseItem('A1');
            const newState = reducer(initialState, action);
            expect(newState.displayMessage).to.equal('please sir, I have a family to feed')
            expect(newState.stock[action.code].quantity).to.equal(10)
        })
        it('decrement the correct coins in float', () => {
             
            const action = actions.dispenseItem('A1');
            const newState = reducer(tempState, action);
            expect(newState.float).to.eql({
            '200': 10,    
            '100': 10,    
            '50': 10,    
            '20': 10,
            '10': 9,
            '5': 9,
            '2': 10,
            '1': 10  
        })
        })
    })
});