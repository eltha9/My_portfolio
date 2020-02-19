import React, { Component } from 'react'
import PropType from 'prop-types'

class Langue extends Component{
    constructor(props){
        super(props)
    }
    static props={
        data: PropType.object.isRequired
    }

    render(){

        return(
            <li className="sub-li">
                {this.props.data.langue} : {this.props.data.niveau}
            </li>
        )
    }
}

export default Langue