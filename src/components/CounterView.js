import React, { Component } from 'react';
class CounterView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onMinus}>-</button>
            </div>
        );
    }
}

export default CounterView;