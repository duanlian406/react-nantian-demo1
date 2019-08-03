//import React, { Component } from 'react';
import { BehaviorSubject } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import CounterView from './CounterView';
import observe from './observe';
/* class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.counter$ = new Subject();
        this.counter$.subscribe(v => {
            this.setState({
                count: this.state.count + v
            });
        });
    }
    render() {
        return (
            <CounterView {...this.state} onAdd={()=>this.counter$.next(1)} onMinus={()=>this.counter$.next(-1)}></CounterView>
        );
    }
} */

export default observe(
    CounterView,
    state => {
        const obs$ = new BehaviorSubject(state);
        return obs$.pipe(scan((acc, cur) => acc + cur, 0), map(v => ({
            count: v,
            onAdd: () => obs$.next(1),
            onMinus: () => obs$.next(-1)
        })));
    },
    3
);