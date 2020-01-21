import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        document.title = "Philippe Dos Santos - Web Developer"
    }
    static props = {

    }

    render(){
        return(
            <div className="content">
                home
            </div>
        )
    }
}

export default Home