import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <div className="content home">
                <section className="top">
                    <span className="name">Philippe</span>
                    <span className="name">Dos Santos</span>
                    <span className="title">Back & Front-end Developer</span>
                </section>
                <main>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus architecto deleniti suscipit necessitatibus blanditiis nihil saepe exercitationem. Adipisci soluta commodi, voluptate perspiciatis molestias dolor, eveniet magni quasi libero velit sunt!
                </main>
                <section className="contact">

                </section>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Home