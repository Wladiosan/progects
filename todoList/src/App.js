import React from 'react'
import classes from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <h1>Todo List</h1>
                <div className={classes.input_field}>
                    <input type="text"/>
                    <label htmlFor="">Todo name</label>
                </div>
            </div>
        )
    }
}

export default App;
