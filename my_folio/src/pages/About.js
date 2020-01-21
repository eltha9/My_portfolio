import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component{
    // constructor(props){
    //     super(props)
    // }
    // static props ={
        
    // }
    componentDidMount(){
        document.title = "Philippe Dos Santos - About"
    }

    render(){
        return(
            <div className="content">
                <h1>about</h1>
            </div>
        )
    }
}

export default About