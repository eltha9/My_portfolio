import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NoMatch extends Component{
    constructor(props){
        super(props)

        
    }
    static props ={
        
    }

    render(){
        return(
            <div className="content">
                <h1>NoMatch error 404</h1>
            </div>
        )
    }
}

export default NoMatch