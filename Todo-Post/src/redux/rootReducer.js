import {combineReducers} from 'redux'
import {postsReducer} from './reducer/postsReducer'
import {appReducer} from './reducer/appReducer'

export default combineReducers({
    posts: postsReducer,
    app: appReducer
})