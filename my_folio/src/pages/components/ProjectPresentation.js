import React, { Component } from 'react'
import PropType from 'prop-types'
import { Link } from "react-router-dom"

class ProjectPresentation extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: null
        }
    }

    static propTypes = {
        data : PropType.object.isRequired,
        id : PropType.number.isRequired
    }

    processId(){
        if((this.props.id +1) <10){

            this.state.id =`0${this.props.id+1}`
        }else{
            this.state.id =`${this.props.id+1}`
        }
    }

    render(){
        this.processId()
        return (
            <div className="home__project">
                <div className="home__project__left">
                    <div className="container" style={{backgroundColor: '#'+this.props.data.project_color }} >
                        <img src={this.props.data.project_image} alt=""/>
                    </div>
                </div>
                <div className="home__project__right">
                    <div className="project__info">
                        <span className="project__number">{this.state.id}</span>
                        <span className="project__date"> {this.props.data.project_date} </span>
                        <div className="project__description">{this.props.data.project_description}</div>
                        <Link to={`/project/${this.props.data.project_link}`} className="project__link">En savoir plus</Link>
                    </div>
                    
                    <div className="project__bottom">
                        <span className="project__type">{this.props.data.project_type}</span>
                        <h2>{this.props.data.project_name}</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProjectPresentation