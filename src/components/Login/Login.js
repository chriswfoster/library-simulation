import React, { Component } from "react"
import { connect } from "react-redux"
import {
  typePassword,
  typeUsername,
  loginUser,
  registerUser
} from "../../ducks/reducer"
import "./login.css"
import Maroonlogo from "../assets/maroon-logo.svg"

class Login extends Component {
  constructor(props) {
    super(props)
    this.logit = this.logit.bind(this)
  }

  logit() {
    console.log(this.props.user)
  }

  render(props) {
    const {
      typedPassword,
      typedUsername,
      typeUsername,
      typePassword,
      user
    } = this.props
    console.log(typedPassword, typedUsername, user)
    return (
      <div>
        <div className="loginWindow loginFlex">
          <div className="loginFlex">
            <img src={Maroonlogo} className="maroonlogopic" />
            <div className="alegreyaFontMaroon">
              {" "}
              <h1>Book Exchange </h1>
            </div>
          </div>
          <div className="loginBox">
            <div>
              <p>Username</p>
              <input onChange={e => typeUsername(e.target.value)} />
            </div>
            <div>
              <p>Password</p>
              <input onChange={e => typePassword(e.target.value)} />
            </div>

            <div>
              <div onClick={() => registerUser(typedUsername, typedPassword)}>
                Register
              </div>
              <div onClick={() => loginUser({typedUsername, typedPassword})}>
                Login
              </div>
              <div onClick={() => this.logit()}> Log Me</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
  typePassword,
  typeUsername,
  loginUser,
  registerUser
})(Login)
