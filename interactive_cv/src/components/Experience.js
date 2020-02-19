import React, { Component } from 'react'
import PropType from 'prop-types'

class Experience extends Component{

    static props = {
        data: PropType.object.isRequired
    }
    render(){

        return(
            <div className="experience">
                <div className="experience__top">
                    <h3>{this.props.data.statu}</h3>
                    <span>{this.props.data.date}</span>
                </div>
                <ul className="taches">
                    {this.props.data.competence.map((compe,id)=>(
                        <li key={id}>- {compe} </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Experience