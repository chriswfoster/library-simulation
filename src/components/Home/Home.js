import React, { Component } from "react"
import { connect } from "react-redux"
import "./home.css"
import {
    getUserInfo
  } from "../../ducks/reducer"

class Home extends Component {
  constructor(props) {
    super(props)
  }

componentWillMount(){
this.props.getUserInfo()
}




  render() {
    return (
      <div>
        <div className="homeWindow" />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUserInfo })(Home)
