import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const store = createStore(rootReducer)

const application = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(application, document.getElementById('root'))
reportWebVitals()
