const initialState = {
    stock: {
        'A1': {
            name: 'Mars Bar',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A2': {
            name: 'Kettle Crisps',
            quantity: 10,
            stuck: false,
            price: 0.85
        }
    },
    credit: [],
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

export default initialState;