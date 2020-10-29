import * as t from '../types'

const tickInitialState = {
    error: null,
    loading: false,
}

type State = {
    error: null | false | string
    loading: boolean
}

interface Action {
    type: string
    payload: string
}

export default function postReducer(state: State = tickInitialState, action: Action): State {
    switch (action.type) {
        case t.SEND_POST_START:
            return { ...state, loading: true }
        case t.SEND_POST_SUCCESS:
            return { ...state, loading: false, error: false }
        case t.SEND_POST_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
