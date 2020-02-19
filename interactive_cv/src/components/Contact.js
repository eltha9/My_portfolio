import React, { Component } from 'react'
import PropType from 'prop-types'

class Contact extends Component{
    constructor(props){
        super(props)
    }

    static props ={
        data: PropType.object.isRequired
    }


    render(){
        return(
            <li className="contact">
                <a href={this.props.data.link} target="_blank">
                    {this.props.data.text} 
                    <div className="icon">
                        <img src={this.props.data.icon}/>
                    </div>
                </a>
            </li>
        )
    }
}

export default Contact