import React, { Component } from 'react';
export default (WrappedComponent, factory, defaultValue) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = defaultValue;
            this.props$ = factory(this.state);
        }
        componentDidMount(){
            this.subscription = this.props$.subscribe(v=>this.setState(v));
        }
        componentWillUnmount(){
            this.subscription.unsubscribe();
        }
        render() {
            return (
                <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
            );
        }
    }
};