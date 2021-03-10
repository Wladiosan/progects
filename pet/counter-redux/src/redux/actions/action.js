import {changeCounterHandler} from './actionType'

export function onChangeCounter(number) {
    return {
        type: changeCounterHandler,
        payload: number
    }
}