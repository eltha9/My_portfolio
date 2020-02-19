import React, { Component } from 'react'
import PropType from 'prop-types'

class Education extends Component{
    constructor(props){
        super(props)
    }
    static props = {
        data:PropType.object.isRequired
    }
    render(){

        return(
            <li className="education">
                <span className="education__ecole">{this.props.data.ecole}</span>
                <span className="education__date">{this.props.data.anne}</span>
                <span className="education__cursus">{this.props.data.cursus}</span>
            </li>
        )
    }
}

export default Education