import React, {Component} from "react"
import {connect} from "react-redux"


class Home extends Component {
    constructor (){
        super()
    }


render(){
    return(
        <div> blah

        </div>


    )
}


}

const mapStateToProps = state => state

export default connect(mapStateToProps, {})(Home)