import React, { Component } from 'react'
import PropType from 'prop-types'

class Expertise extends Component{
    constructor(props){
        super(props)
    }
    static props = {
        data: PropType.string.isRequired
    }
    render(){

        return(
            <li className="sub-li">
                {this.props.data}
            </li>
        )
    }
}

export default Expertise