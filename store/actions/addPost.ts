import axios from '../../api'
import * as t from '../types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

export const addPost = (title: string, body: string): ThunkAction<void, RootState, null, Action<string>> => async (
    dispatch,
) => {
    try {
        dispatch({ type: t.SEND_POST_START })
        axios
            .post('/posts', {
                title,
                body,
            })
            .then((res) => console.log(res))
        console.log({ title, body })
        dispatch({ type: t.SEND_POST_SUCCESS })
    } catch (error) {
        dispatch({ type: t.SEND_POST_ERROR, payload: error.message })
    }
}
