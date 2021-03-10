import React from 'react'
import {connect} from 'react-redux'
import {onChangeCounter} from './redux/actions/action'
import classes from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div className={classes.App}>
                <h1>Counter: <strong>{this.props.counter}</strong></h1>
                <div>
                    <button onClick={() => this.props.changeCounterHandler(1)}>Прибавить +1</button>
                    <button onClick={() => this.props.changeCounterHandler(-1)}>Отнять -1</button>
                </div>
                <div>
                    <button onClick={() => this.props.changeCounterHandler(10)}>Прибавить +10</button>
                    <button onClick={() => this.props.changeCounterHandler(-10)}>Отнять -10</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCounterHandler: number => dispatch(onChangeCounter(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
