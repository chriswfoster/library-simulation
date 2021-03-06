import axios from "axios"
import React from "react"
import { Redirect } from "react-router"


//Action Constants here
const REQ_USER = "REQ_USER"
const LOGIN_USER = "LOGIN_USER"
const REGISTER_USER = "REGISTER_USER"
const TYPE_USERNAME = "TYPE_USERNAME"
const TYPE_PASSWORD = "TYPE_PASSWORD"

//Intial State
const initialState = {
  user: {},
  typedUsername: {},
  typedPassword: {}
}

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })

    case LOGIN_USER + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case LOGIN_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    case REGISTER_USER + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case REGISTER_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    case TYPE_USERNAME:
      return Object.assign({}, state, { typedUsername: action.payload })
    case TYPE_PASSWORD:
      return Object.assign({}, state, { typedPassword: action.payload })
    default:
      return state
  }
}

//Action Creators

export function getUserInfo() {
  console.log("hi")
  return {
    type: REQ_USER,
    payload: axios.get("/api/me").then(response => {
      console.log(response.data)
    })
  }
}

export function loginUser(obj) {
  console.log("worked")
  return {
    type: LOGIN_USER,
    payload: axios
      .post("/api/auth/login", {
        username: obj.typedUsername,
        password: obj.typedPassword
      })
      .then(response => console.log("loginUserLogging:", response.data))
  }
}
export function registerUser(un, pw) {
  return {
    type: REGISTER_USER,
    payload: axios
      .post("/api/auth/register", {
        username: un,
        password: pw
      })
      .then(response => {
        return response.data && console.log(response.data)
      })
  }
}

export function typePassword(pw) {
  return {
    type: TYPE_PASSWORD,
    payload: pw
  }
}

export function typeUsername(un) {
  return {
    type: TYPE_USERNAME,
    payload: un
  }
}
