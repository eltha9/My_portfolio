import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom"


class Project extends Component{
    constructor(props){
        super(props)

        // this.name = useParams()
        // console.log(this.props.match.params.id)
    }

    static props = {

    }

    

    render(){
        return(
            <div className="project">
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Project