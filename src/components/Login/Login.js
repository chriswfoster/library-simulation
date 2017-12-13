import React, {Component} from "react"
import {connect} from "react-redux"
import {typePassword, typeUsername, loginUser, registerUser} from '../../ducks/reducer'
import './login.css'
import Maroonlogo from "../assets/maroon-logo.svg"

class Login extends Component {
    constructor (){
        super()
    }





render(){
    const {password, username} = this.props
    return(
        <div> 
            
            <div className="loginWindow loginFlex">
<div className="loginFlex">
<img src={Maroonlogo} className="maroonlogopic"/>
<div className="alegreyaFontMaroon"> <h1>Book Exchange </h1></div>
</div>
<div className="loginBox">
<div>
    <p>Username</p>
    <input onChange={(e) => typeUsername(e.target.value) }/>
    </div>
<div>
<p>Password</p>
<input onChange={(e) => typePassword(e.target.value)} />
</div>

<div>
<div onClick={() => registerUser(username, password)}>Register</div>
<div onClick={() => loginUser(username, password)}>Login</div>


    </div>



    </div>


                </div>


        </div>


    )
}


}

const mapStateToProps = state => state

export default connect(mapStateToProps, {typePassword, typeUsername, loginUser, registerUser})(Login)