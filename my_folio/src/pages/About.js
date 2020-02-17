import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component{
    constructor(props){
        super(props)

        this.state={
            data: null
        }
    }
    // static props ={
        
    // }
    componentDidMount(){
        document.title = "Philippe Dos Santos - About"

        document.body.style.overflow = 'hidden'
    }

    getExperiences(){

    }

    render(){
        return(
            <div className="about">
                <section className="row about__content">
                    <div className="left-marge"></div>

                    <div className="content">
                        <div className="content__left">
                            <span>Hello...</span>
                        </div>
                        <div className="content__right">
                            <div className="scrollable">
                            
                            </div>
                        </div>
                    </div>

                    <div className="right-marge"></div>
                </section>

                <div className="row about__bottom border-none">
                    <div className="left-marge"></div>

                    <div className="content"></div>

                    <div className="right-marge"></div>
                </div>
            </div>
        )
    }
}

export default About