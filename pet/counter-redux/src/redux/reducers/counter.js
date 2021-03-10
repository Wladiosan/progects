import {changeCounterHandler} from '../actions/actionType'

const initialState = {
    counter: 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case changeCounterHandler:
            return {
                counter: state.counter + action.payload,
            }
        default:
            return state
    }
}