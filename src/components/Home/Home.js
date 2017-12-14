import React, { Component } from "react"
import { connect } from "react-redux"
import "./home.css"
import { getUserInfo } from "../../ducks/reducer"

class Home extends Component {
  constructor(props) {
    super(props)
this.watisit=this.watisit.bind(this)
  }

  componentDidMount() {
      
    this.props.getUserInfo()
  }

  watisit(){
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div className="homeWindow"> 
        <button onClick={() => this.watisit()} />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUserInfo })(Home)
