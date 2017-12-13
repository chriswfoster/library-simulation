import axios from "axios"

//Action Constants here
const REQ_WHATEVER = "REQ_ WHATEVER"

//Intial State
const initialState = {
    user: {}
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
  

        default:
        return state
    }
}


//Action Creators
