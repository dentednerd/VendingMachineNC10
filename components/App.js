import React, {Component} from 'react';
import {connect} from 'react-redux';
import VendingMachine from './VendingMachine';

class App extends Component {
    render () {
        return (
            <div>
                <VendingMachine stock={this.props.stock}/>
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state);
    return {
        stock: state.stock
    };
}

export default connect(mapStateToProps)(App);
// export default App;