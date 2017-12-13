import axios from "axios"

//Action Constants here
const REQ_WHATEVER = "REQ_ WHATEVER"
const TYPE_USERNAME = "TYPE_USERNAME"
const TYPE_PASSWORD = "TYPE_PASSWORD"

//Intial State
const initialState = {
    user: {},
    typedUsername: {},
    typedPassword: {},

}


//Reducer
export default function reducer(state = initialState, action){
    switch (action.type){
        case REQ_WHATEVER + "_PENDING":
        return Object.assign({}, state, { isLoading: true })
        case REQ_WHATEVER + "_FULFILLED":
        return Object.assign({}, state, {
          isLoading: false,
          user: action.payload
        })
        case TYPE_USERNAME:
        return Object.assign({}, state, {typedUsername: action.payload})
        case TYPE_PASSWORD:
        return Object.assign({}, state, {typedPassword: action.payload})
        default:
        return state
    }
}


//Action Creators

export function typePassword(pw){
    return {
        type: TYPE_PASSWORD,
        payload: pw
    }
}

export function typeUsername(un){
    return {
        type: TYPE_USERNAME,
        payload: un
    }
}
