import React, { Component } from 'react'
import PropType from 'prop-types'


class ProjectPresentation extends Component{
    constructor(props){
        super(props)
    }

    static propTypes = {
        projectImage : PropType.string.isRequired,
        projectNumber: PropType.string.isRequired,
        projectColor: PropType.string.isRequired

    }

    render(){

        return (
            <div className="home-project">
                <div className="left-project">
                    <div className="left-project-container" style={{backgroundColor: '#'+this.props.projectColor }} >
                        <img src={this.props.projectImage} alt=""/>
                    </div>
                </div>
                <div className="right-project">
                    <div className="project__info">
                        <span className="project__number">{this.props.projectNumber}</span>
                        <span className="project__date"> Mai-Juin 2018 </span>
                        <div className="project__description">Petit ange parti trop tot</div>
                        <a href="#"> En savoir plus </a>
                    </div>
                    
                    <div className="right-project-bottom">
                        <span className="project__type">Dev Full stack</span>
                        <h2>Transway</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProjectPresentation