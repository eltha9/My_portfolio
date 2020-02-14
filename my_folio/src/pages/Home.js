import React, { Component } from 'react'
import PropTypes from 'prop-types'


import ProjectPresentation from './components/ProjectPresentation'
import HomeTop from './components/HomeTop'
import Footer from './components/Footer'
import HomeContact from './components/HomeContact'

class Home extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        document.title = "Philippe Dos Santos - Web Developer"
    }
    static props = {

    }

    render(){
        return(
            <div className="home">



                    <HomeTop/>
                    <section className="row home__main">
                        <div className="left-marge"></div>

                        <div className="content">
                            <div className="home__main__title">
                                Project
                            </div>
                            <div className="projects">
                                <ProjectPresentation projectImage="https://i.picsum.photos/id/223/400/300.jpg" projectNumber="01" projectColor="A2348F" />
                                <ProjectPresentation projectImage="https://i.picsum.photos/id/223/400/300.jpg" projectNumber="01" projectColor="A2888F" />
                            </div>
                        </div>
                        
                        <div className="right-marge"></div>
                    </section>
                    <HomeContact/>
                    <Footer/>
            </div>
        )
    }
}

export default Home