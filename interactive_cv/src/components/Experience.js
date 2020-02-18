import React, { Component } from 'react'
import PropType from 'prop-types'

class Experience extends Component{
    constructor(props){
        super(props)
    }
    static props = {
        data: PropType.object.isRequired
    }
    render(){

        return(
            <div className="experience">
                <h3>{this.props.data.statu}</h3>
                <span>{this.props.data.date}</span>
                <ul className="taches">
                    {this.props.data.competence.map((compe,id)=>(
                        <li key={id}> {compe} </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Experience